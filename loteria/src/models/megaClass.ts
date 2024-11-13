export class Mega {
    concurso:number[]
    data:string[]
    dezenas:number[]
    ganhadores:number[]
    premio:number[]
    apostas:number[]

    constructor(dados: string[]) {
        dados.forEach((element) => {
            let array: string[] = element.split(";");
            
            this.concurso.push(parseInt(array[0]));
            this.data.push(array[1]);

            this.dezenas.push();
            this.ganhadores.push(parseInt(array[8]));
            this.premio.push(parseInt(array[9]));
            this.apostas.push(parseInt(array[10]));
        });
    }


    public dezenasMaisSorteadas() {
        // Informar quais as 6 dezenas mais sorteadas, inclusive a quantidade de vezes.
        // Se ocorrer empate, listar todas na ordem de classificação
    }
    public somatorioPremios() {
        // Informar o total de prêmios pagos ano a ano, desde 1996;
    }
    public quantGanhadores() {
        // Informar a quantidade total de ganhadores da Sena e o valor total dos 
        // prêmios pagos a eles;
    }
    public tresMaioresPremios() {
        // Informar os 3 maiores prêmios pagos, a quantidade de ganhadores e 
        // quanto cada um recebeu
    }
    public anoComMaisApostas() {
        // Informar o ano com maior número de apostas.
    }
}

