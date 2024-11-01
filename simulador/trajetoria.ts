const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx: any = canvas.getContext("2d");

const image = new Image();
image.src = './canhao.jpg';

image.onload = () => {
    drawImage();
};

function calcularTrajetoria(v0:number, angulo:number): { x: number, y: number }[] {
    const radianos = angulo * Math.PI/180;
    const g:number = 9.81;
    
    const tempoVoo:number = ( 2 * v0 * Math.sin(radianos) ) / g
    const numPontos:number = 100;
    let pontos:{ x: number, y: number }[] = [];  
    
    for(let i=0; i < numPontos; i++) {
        const t = (i / numPontos) * tempoVoo;
        const x = v0 * Math.cos(radianos) * t;
        const y = ( v0 * Math.sin(radianos) * t ) - ( Math.pow(t, 2) * 0.5 * g ); 
        pontos.push({ x,y })
    }    

    return pontos;
}


function mostrarTrajetoria(v0:number, angulo:number) {
    const pontos = calcularTrajetoria(v0,angulo);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);

    pontos.forEach(point => {
        const x = point.x * 10; 
        const y = canvas.height - point.y * 10;
        ctx.lineTo(x, y);
    });
    
    ctx.strokeStyle = 'purple';
    ctx.stroke();
    ctx.closePath();
}


function drawImage() {
    const imgX = 0; 
    const imgY = canvas.height - image.height;
    ctx.drawImage(image, imgX, imgY);
}


function updateTrajectory() {
    if (v_input && a_input) {
        const v0 = parseFloat(v_input.value);
        const angulo = parseFloat(a_input.value);
        mostrarTrajetoria(v0, angulo);
        drawImage();
    }
}


function inputValor(a:Element, b:HTMLInputElement):void {
    a.textContent = b.value;
    b.addEventListener("input", (event: Event) => {
        const target = event.target as HTMLInputElement
        a.textContent = target.value;
        updateTrajectory();
    });
};



const v_valor = document.querySelector("#v_valor");
const v_input = document.querySelector<HTMLInputElement>("#v_input");
const a_valor = document.querySelector("#a_valor");
const a_input = document.querySelector<HTMLInputElement>("#a_input");


if (v_valor && v_input) inputValor(v_valor, v_input);
if (a_valor && a_input) inputValor(a_valor, a_input);
updateTrajectory();

