import fs from "node:fs";
import Meteo from "./models/Meteo";

let lista = Array<Meteo>();
const dados = fs.readFileSync("./dados.csv", "utf-8").split("\r\n");

dados.forEach((linha, index) => {
  if(index > 0) {
    let x = linha.split(";");

    let dia = parseInt(x[0].substring(0,2));
    let mes = parseInt(x[0].substring(3,5)) - 1;
    let ano = parseInt(x[0].substring(6,10));

    const objeto = new Meteo(
      new Date(ano,mes,dia),
      x[1],
      parseFloat(x[2].replace(",", ".")),
      parseFloat(x[3].replace(",", ".")),
      parseFloat(x[4].replace(",", ".")),
      parseFloat(x[5].replace(",", ".")),
      parseFloat(x[6].replace(",", ".")),
      parseFloat(x[7].replace(",", ".")),
      parseFloat(x[8].replace(",", ".")),
      parseFloat(x[9].replace(",", ".")),
      parseFloat(x[10].replace(",", ".")),
      parseFloat(x[11].replace(",", ".")),
      parseFloat(x[12].replace(",", ".")),     
    );

    lista.push(objeto);
  }
});

// Exercício C e F
const listaT = lista.sort((a,b) => {
  return b.tempC - a.tempC
});
const cincoT = [
  {temp: listaT[0].tempC, data: listaT[0].date},
  {temp: listaT[1].tempC, data: listaT[1].date},
  {temp: listaT[2].tempC, data: listaT[2].date}, 
  {temp: listaT[3].tempC, data: listaT[3].date}, 
  {temp: listaT[4].tempC, data: listaT[4].date}
];

const listaP = lista.sort((a,b) => {
  return b.pressBar - a.pressBar;
});
const tresP = [
  {press: listaP[0].pressBar, data: listaP[0].date},
  {press: listaP[1].pressBar, data: listaP[1].date},
  {press: listaP[2].pressBar, data: listaP[2].date}
];

// Exercício D, E e G
let mediaTemp: number = lista.reduce((acc, obj) => {
  return acc + obj.tempC;
}, 0);

let mediaUmidade: number = lista.reduce((acc, obj) => {
  return acc + obj.hum;
}, 0);

let mediaVento: number = lista.reduce((acc, obj) => {
  return acc + obj.windSpeed_avg;
}, 0);

mediaTemp /= lista.length;
mediaUmidade /= lista.length;
mediaVento /= lista.length;


console.log(">> Exercício C <<");
console.log("As cinco maiores medições de temperatura: ");
console.log(cincoT[0].data.toLocaleDateString("pt-br") + " : " + cincoT[0].temp);
console.log(cincoT[1].data.toLocaleDateString("pt-br") + " : " + cincoT[1].temp);
console.log(cincoT[2].data.toLocaleDateString("pt-br") + " : " + cincoT[2].temp);
console.log(cincoT[3].data.toLocaleDateString("pt-br") + " : " + cincoT[3].temp);
console.log(cincoT[4].data.toLocaleDateString("pt-br") + " : " + cincoT[4].temp);
console.log();

console.log(">> Exercício D <<");
console.log("Média de temperatura: " + mediaTemp);
console.log();

console.log(">> Exercício E <<");
console.log("Média da velocidade do vento: " + mediaVento);
console.log();

console.log(">> Exercício F <<");
console.log("As três maiores medições de pressão: ");
console.log(tresP[0].data.toLocaleDateString("pt-br") + " : " + tresP[0].press);
console.log(tresP[1].data.toLocaleDateString("pt-br") + " : " + tresP[1].press);
console.log(tresP[2].data.toLocaleDateString("pt-br") + " : " + tresP[2].press);
console.log();

console.log(">> Exercício G <<");
console.log("Média de umidade: " + mediaUmidade);