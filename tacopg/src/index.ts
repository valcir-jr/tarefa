import express from "express";
import routes from './routes';
import dotenv from "dotenv";
import fs from "fs";
import readline from "node:readline";
import Grupo from "./models/Grupo";
import Preparacao from "./models/Preparacao";
import Produto from "./models/Produto";
import query from "./controllers/db";
import ProdPrep from "./models/ProdPrep";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express(); 

app.use(express.json());


const server = app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});

server.keepAliveTimeout = 61 * 1000;

// define a rota para o pacote /routes
app.use(routes);







// importando tabela grupo
var rl = readline.createInterface({
    input: fs.createReadStream('./src/Taco-Grupo.csv'),
    output: process.stdout,
    terminal: false
}) // cria a interface para leitura do arquivo assyncrona

let x: number = 0; // variável necessária para pular a primeira linha de cabeçalho do arquivo CSV

rl.on('line', function (linha: any) { // função que lê linha a linha do arquivo e as colaca na variável linha
    if (x > 0) { // só processa se não for a primeira linha
        var l = linha.split(';'); // quebra a linha nos pontos-e-vírgula gerando um array com cada campo/coluna
        console.log(l); // mostra o objeto que será gravado no BD
        const g = new Grupo(l[0], l[1]); // instancia um objeto do Modelo a ser usado
        fetch('http://localhost:3001/grupo', {  // cria conexão HTTP com post para salvar o objeto no BD
            method: 'POST', // tipo de requisição
            headers: { // cabeçalho da requisição
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // corpo da requisição convertido para JSON
                id: g.id,
                gru_descricao: g.gru_descricao
            })
        })
            .then(response => response.json()) // resposta do backend
            .then(data => {
                console.log(data); // a rotina retorna o ID do objeto cadastrado
            })
            .catch(error => {
                console.error(error); // mostra erro casso ocorra
            });
    }
    x++; // incrementa a varíavel de controle de linha
})

rl.close; // fecha a função rl para o arquivo não constar como aberto pelo SO






var rl = readline.createInterface({
    input: fs.createReadStream('./src/Taco-Preparacao.csv'),
    output: process.stdout,
    terminal: false
}) 

let y: number = 0;

rl.on('line', function (linha: any) { 
    if (y > 0) { 
        var l = linha.split(';'); 
        console.log(l); 
        const p = new Preparacao(l[0], l[1]);
        fetch('http://localhost:3001/preparacao', {  
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: p.id,
                pre_descricao: p.pre_descricao
            })
        })
            .then(response => response.json()) 
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error(error); 
            });
    }
    y++; 
})

rl.close; 





var rl = readline.createInterface({
    input: fs.createReadStream('./src/Taco-ProdPrep.csv'),
    output: process.stdout,
    terminal: false
}) 

let j: number = 0; 

rl.on('line', function (linha: any) { 
    if (j > 0) {
        var l = linha.split(';'); 
        console.log(l); 
        const p = new ProdPrep(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11],
          l[12], l[13], l[14], l[15], l[16], l[17], l[18], l[19], l[20], l[21], l[22], l[23],l[24], l[25],
          l[26], l[27], l[28], l[29], l[30], l[31], l[32], l[33], l[34], l[35], l[36], l[37], l[38]
        ); 
        fetch('http://localhost:3001/preparacao', {  
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: p.id,
                preparacao: p.preparacao,
                energia: p.energia,
                proteina: p.proteina,
                lipidio: p.lipidio,
                carboidrato: p.carboidrato,
                fibra: p.fibra,
                colesterol: p.colesterol,
                agsaturado: p.agsaturado,
                agmono: p.agmono,
                agpoli: p.agpoli,
                aglinoleico: p.aglinoleico,
                aglinolenico: p.aglinolenico,
                agtranstotal: p.agtranstotal,
                acucartotal: p.acucartotal,
                acucaradicao: p.acucaradicao,
                calcio: p.calcio,
                magnesio: p.magnesio,
                manganes: p.manganes,
                fosforo: p.fosforo,
                ferro: p.ferro,
                sodio: p.sodio,
                sodioadicao: p.sodioadicao,
                potassio: p.potassio,
                cobre: p.cobre,
                zinco: p.zinco,
                selenio: p.selenio,
                retinol: p.retinol,
                vitamina_a: p.vitamina_a,
                tiamina: p.tiamina,
                riboflavina: p.riboflavina,
                niacina: p.niacina,
                niacina_ne: p.niacina_ne,
                piridoxina: p.piridoxina,
                cobalamina: p.cobalamina,
                folato: p.folato,
                vitamina_d: p.vitamina_d,
                vitamina_e: p.vitamina_e,
                vitamina_c: p.vitamina_c
            })
        })
            .then(response => response.json()) 
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error(error); 
            });
    }
    j++; 
})

rl.close;




// importando tabela produtos
const data = fs.readFileSync('./src/Taco-Produto.csv',
    { encoding: 'utf8', flag: 'r' }).toString().split("\r\n"); // lê e fecha o arquivo CSV de Produtos, 
// colocando os dados na variável data linha a linha

let w: number = 0; // variável necessária para pular a primeira linha de cabeçalho do arquivo CSV

data.forEach(linha => { // faz a leitura de cada linha da variável data
    if (w > 0) { // só processa se não for a primeira linha
        var l = linha.split(';'); // quebra a linha nos pontos-e-vírgula gerando um array com cada campo/coluna
        console.log(l);
        const p = new Produto(parseInt(l[0]), l[1], parseInt(l[2])); // instancia um objeto do Modelo a ser usado
        const r: any = query( // cria a query direta, sem passar pelas rotas
            "INSERT INTO produto(id, pro_descricao, pro_grupo) VALUES ($1,$2,$3)",
            [p.id, p.pro_descricao, p.pro_grupo]
        );
    }
    w++; // incrementa a varíavel de controle de linha
}); // fecha data.forEach

console.log("Produtos importados...");




