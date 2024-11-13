import { Mega } from "./models/megaClass"; 
import * as fs from 'node:fs';

const dados = fs.readFileSync("../Megasena.csv", "utf-8").split("\r\n");
let resposta = new Mega(dados); 

resposta.dezenasMaisSorteadas();
resposta.somatorioPremios();
resposta.quantGanhadores();
resposta.tresMaioresPremios();
resposta.anoComMaisApostas(); 

