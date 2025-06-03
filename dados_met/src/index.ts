import fs from "node:fs";
import Meteo from "./models/Meteo";

let lista = Array<Meteo>();
const dados = fs.readFileSync("../dados.csv", "utf-8").split("\r\n");

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

// Exercício C


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

console.log("Média de temperatura: " + mediaTemp);
console.log("Média de umidade: " + mediaUmidade);
console.log("Média da velocidade do vento: " + mediaVento);


// Exercício F