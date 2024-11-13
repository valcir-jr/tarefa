import { Megasena } from "./models/megasenaClass"; 
import * as fs from 'node:fs';

const dados = fs.readFileSync("../Megasena.csv", "utf-8").split("\r\n");
let resposta = new Megasena(dados); 

resposta.dezenasMaisSorteadas();
resposta.somatorioPremios();
resposta.quantGanhadores();
resposta.tresMaioresPremios();
resposta.anoComMaisApostas(); 

