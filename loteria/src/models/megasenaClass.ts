export class Megasena {
    concurso:number[]
    data:string[]
    dezenas:number[][]
    ganhadores:number[]
    premio:number[]
    apostas:number[]

    constructor(dados: string[]) {
        this.concurso = [];
        this.data = [];
        this.dezenas = [];
        this.ganhadores = [];
        this.premio = [];
        this.apostas = [];

        for(let i: number = 1; i < dados.length - 1; i++) {
            let array: string[] = dados[i].split(";");
            
            this.concurso.push(parseInt(array[0]));
            this.data.push(array[1]);

            let matriz: number[] = [
                parseInt(array[2]),
                parseInt(array[3]),
                parseInt(array[4]),
                parseInt(array[5]),
                parseInt(array[6]),
                parseInt(array[7]),
            ]
            this.dezenas.push(matriz); 

            this.ganhadores.push(parseInt(array[8]));
            this.premio.push(parseInt(array[9]));
            this.apostas.push(parseInt(array[10]));
        };
    }


    public dezenasMaisSorteadas() {
        // Informar quais as 6 dezenas mais sorteadas, inclusive a quantidade de vezes.
        // Se ocorrer empate, listar todas na ordem de classificação


    }

    public somatorioPremios() {  
        let soma: number = 0;

        for(let i: number = 0; i < this.premio.length - 1; i++) {
            if(this.ganhadores[i] > 0) {
                soma += this.premio[i];
            }
        }
        console.log(soma);       
    }

    public quantGanhadores() {
        let numGanhadores: number = 0;
        let somaPremios: number = 0;

        for(let i: number = 0; i < this.ganhadores.length - 1; i++) {
            if(this.ganhadores[i] > 0) {
                numGanhadores += this.ganhadores[i];
                somaPremios += this.premio[i];
            };
        };
        console.log(`Nº de ganhadores: ${numGanhadores}, Total dos prêmios pagos a eles: ${somaPremios}`)
    }

    public tresMaioresPremios() {
        // Informar os 3 maiores prêmios pagos, a quantidade de ganhadores e 
        // quanto cada um recebeu


    }

    public anoComMaisApostas() {
        let id:number = 0;
        let maior: number = 0;

        for(let i: number = 0; i < this.apostas.length - 1; i++) {
            if(this.apostas[i] > maior) {
                maior = this.apostas[i];
                id = i;
            }
        };
        console.log(`Ano com mais apostas: ${this.data[id]}: ${maior}`)
    }
}