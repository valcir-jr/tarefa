var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Imagem do canhão
var image = new Image();
image.src = "./canhao.jpg";

// Variáveis do projetil
var projectile = {
  x: 0,
  y: 0,
  radius: 10,
  vx: 0,
  vy: 0,
  active: false,
  color: "black",
};

// Carregamento da imagem do canhão
image.onload = function () {
  drawImage();
};

// Desenhar o canhão
function drawImage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var imgX = 50;
  var imgY = canvas.height - image.height;
  ctx.drawImage(image, imgX, imgY);
  drawProjectile();
}

// Desenhar o projetil
function drawProjectile() {
  if (projectile.active) {
    ctx.beginPath();
    ctx.arc(projectile.x, canvas.height - projectile.y, projectile.radius, 0, Math.PI * 2);
    ctx.fillStyle = projectile.color;
    ctx.fill();
    ctx.closePath();
  }
}

// Lançar o projetil
function launchProjectile(v0, angle) {
  var radians = (angle * Math.PI) / 180;
  projectile.vx = v0 * Math.cos(radians);
  projectile.vy = v0 * Math.sin(radians);
  projectile.x = 50 + image.width;
  projectile.y = 30;
  projectile.active = true;
  animate();
}

// Atualizar projetil
function updateProjectile() {
  var g = 9.81;
  projectile.vy -= g * 0.1;
  projectile.y += projectile.vy * 0.1;
  projectile.x += projectile.vx * 0.1;

  if (projectile.y <= 0) {
      projectile.active = false;

      // Atualizar mensagem na grama
      const message = document.getElementById("message");
      message.textContent = "Distância percorrida: " + projectile.x.toFixed(2) + " metros";
  }
}

// Adicionar marcador de impacto e trilha
function drawImpactMarker(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function drawReferenceLines() {
  ctx.strokeStyle = "#ccc";
  ctx.lineWidth = 0.5;

  // Linhas horizontais
  for (let i = 1; i < 5; i++) {
    const y = canvas.height - (i * canvas.height) / 5;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
    ctx.closePath();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawReferenceLines();
  drawImage();
  drawProjectile();
  updateProjectile();

  if (projectile.active) {
    requestAnimationFrame(animate);
  } else {
    // Desenhar marcador de impacto após o movimento
    drawImpactMarker(projectile.x, canvas.height - projectile.y);
  }
}

// Mostrar onde a bola vai parar na trajetória
function showTrajectory(v0, angle) {
  var points = calculateTrajectory(v0, angle);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawImage();
  drawReferenceLines();

  ctx.beginPath();
  points.forEach((point, i) => {
    var x = point.x + 50 + image.width;
    var y = canvas.height - point.y;

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "purple";
  ctx.stroke();

  // Desenhar marcador no ponto de impacto
  const lastPoint = points[points.length - 1];
  drawImpactMarker(lastPoint.x + 50 + image.width, canvas.height - lastPoint.y);
}

// Calcular trajetória
function calculateTrajectory(v0, angle) {
  var radians = (angle * Math.PI) / 180;
  var g = 9.81;
  var flightTime = (2 * v0 * Math.sin(radians)) / g;
  var numPoints = 100;
  var points = [];
  for (var i = 0; i < numPoints; i++) {
    var t = (i / numPoints) * flightTime;
    var x = v0 * Math.cos(radians) * t;
    var y = v0 * Math.sin(radians) * t - 0.5 * g * t * t;
    points.push({ x, y });
  }
  return points;
}

const vInput = document.getElementById("v_input");
const aInput = document.getElementById("a_input");
const vValor = document.getElementById("v_valor");
const aValor = document.getElementById("a_valor");

vInput.addEventListener("input", () => {
    vValor.textContent = vInput.value;
});

aInput.addEventListener("input", () => {
    aValor.textContent = aInput.value;
});

// Eventos
document.getElementById("launch_button").addEventListener("click", function () {
  const v0 = parseFloat(document.getElementById("v_input").value);
  const angle = parseFloat(document.getElementById("a_input").value);
  showTrajectory(v0, angle);
  setTimeout(() => launchProjectile(v0, angle), 750);
});