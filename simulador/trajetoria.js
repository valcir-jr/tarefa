var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Variáveis globais
var image = new Image();
var projectileImage = new Image(); // Imagem do projetil
var imagesLoaded = 0;

// Carregar as imagens
image.src = "./canhao.jpg"; // Imagem do canhão
projectileImage.src = "./projétil.png"; // Imagem do projetil

// Aguardar o carregamento das imagens
image.onload = function () {
  imagesLoaded++;
  checkAllImagesLoaded();
};

projectileImage.onload = function () {
  imagesLoaded++;
  checkAllImagesLoaded();
};

// Função que verifica se as imagens foram carregadas
function checkAllImagesLoaded() {
  if (imagesLoaded === 2) {
    drawImage(); // Desenhar o canhão uma vez que as imagens foram carregadas
    drawProjectile(); // Desenhar o projetil (caso já esteja ativo)
  }
}

// Objeto do projetil
var projectile = {
  x: 50 + image.width, // Posição inicial ao lado do canhão
  y: canvas.height - 30, // Posição inicial próxima ao chão
  radius: 10,
  color: "red",
  vx: 0,
  vy: 0,
  active: false, // Inicialmente inativo
};

// Função para desenhar o canhão e o projetil
function drawImage() {
  var imgX = 50; // Posição do canhão
  var imgY = canvas.height - image.height; // Mantém o canhão na parte inferior
  ctx.drawImage(image, imgX, imgY);

  drawProjectile(); // Sempre desenha o projetil, mesmo que inativo
}

// Função para desenhar o projetil
function drawProjectile() {
  if (projectile.active) {
    ctx.drawImage(
      projectileImage,
      projectile.x - 10, // Ajuste para centralizar o projetil
      canvas.height - projectile.y - 10, // Ajuste no eixo Y
      20, // Largura do projetil
      20  // Altura do projetil
    );
  }
}

// Função para lançar o projetil
function launchProjectile(v0, angle) {
  var radians = (angle * Math.PI) / 180;
  projectile.vx = v0 * Math.cos(radians); // Velocidade horizontal
  projectile.vy = v0 * Math.sin(radians); // Velocidade vertical
  projectile.x = 50 + image.width; // Inicia ao lado do canhão
  projectile.y = canvas.height - 30; // Posição vertical inicial
  projectile.active = true; // Torna o projetil ativo

  drawImage(); // Desenha o canhão
  drawProjectile(); // Desenha o projetil
}
  
  // Atualiza o movimento do projetil com base na física de gravidade
  function updateProjectile() {
    if (projectile.active) {
      var g = 9.81; // Constante da gravidade
      projectile.x += projectile.vx; // Atualiza posição horizontal
      projectile.y += projectile.vy; // Atualiza posição vertical
      projectile.vy -= g * 0.1; // Aplica a gravidade
  
      if (projectile.y >= canvas.height - 30) {
        // Quando o projetil atinge o chão
        projectile.active = false;
        alert("Distância percorrida: " + projectile.x.toFixed(2) + " metros");
      }
    }
  }
  
  // Função para calcular a trajetória do projetil
  function calculateTrajectory(v0, angle) {
    var radians = (angle * Math.PI) / 180;
    var g = 9.81;
    var flightTime = (2 * v0 * Math.sin(radians)) / g;
    var numPoints = 100;
    var points = [];
    for (var i = 0; i < numPoints; i++) {
      var t = (i / numPoints) * flightTime;
      var x = v0 * Math.cos(radians) * t;
      var y = v0 * Math.sin(radians) * t - 0.5 * g * Math.pow(t, 2);
      points.push({ x: x, y: y });
    }
    return points;
  }
  
  // Exibe a trajetória do projetil com base nos valores da velocidade inicial e ângulo
  function showTrajectory(v0, angle) {
    var points = calculateTrajectory(v0, angle);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa a tela
  
    // Redesenha o canhão e o projetil
    drawImage();
    drawProjectile();
  
    ctx.beginPath();
    ctx.moveTo(50 + image.width, canvas.height - 30); // Começa a trajetória do canhão
    points.forEach(function (point) {
      var x = point.x;
      var y = canvas.height - point.y; // Inverte o eixo y para o posicionamento correto
      ctx.lineTo(x + 50 + image.width, y); // Ajusta o caminho da trajetória em relação ao canhão
    });
    ctx.strokeStyle = "purple"; // Cor da trajetória
    ctx.stroke();
    ctx.closePath();
  }
  
  // Atualiza a trajetória com os valores de entrada do usuário
  function updateTrajectory() {
    if (v_input && a_input) {
      var v0 = parseFloat(v_input.value);
      var angle = parseFloat(a_input.value);
      showTrajectory(v0, angle); // Atualiza a trajetória com os valores do usuário
      if (projectile.active) {
        drawImage(); // Redesenha o canhão
        drawProjectile(); // Redesenha o projetil
        updateProjectile(); // Atualiza o movimento do projetil
      }
    }
  }

function inputValue(a, b) {
  a.textContent = b.value;
  b.addEventListener("input", function (event) {
    var target = event.target;
    a.textContent = target.value;
    drawProjectile();
    updateTrajectory();
  });
}

var v_value = document.querySelector("#v_valor");
var v_input = document.querySelector("#v_input");
var a_value = document.querySelector("#a_valor");
var a_input = document.querySelector("#a_input");

if (v_value && v_input) inputValue(v_value, v_input);
if (a_value && a_input) inputValue(a_value, a_input);

document.querySelector("#launch_button").addEventListener("click", function () {
  var v0 = parseFloat(v_input.value);
  var angle = parseFloat(a_input.value);
  console.log(v_input.value, a_input.value);
  drawProjectile();
  launchProjectile(v0, angle);
  updateTrajectory(); // Initially show the trajectory

  function animate() {
    if (projectile.active) {
      drawProjectile();
      updateTrajectory();
      requestAnimationFrame(animate); // Continue animation
    }
  }
  animate(); // Start animation
});

drawImage();
drawProjectile();
launchProjectile();
updateTrajectory(); // Update trajectory initially to show on screen
