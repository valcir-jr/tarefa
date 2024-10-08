class ProdPrep {
    id: number;
    preparacao: number;
    energia: number;
    proteina: number;
    lipidio: number;
    carboidrato: number;
    fibra: number;
    colesterol: number;
    agsaturado: number;
    agmono: number;
    agpoli: number;
    aglinoleico: number;
    aglinolenico: number;
    agtranstotal: number;
    acucartotal: number;
    acucaradicao: number;
    calcio: number;
    magnesio: number;
    manganes: number;
    fosforo: number;
    ferro: number;
    sodio: number;
    sodioadicao: number;
    potassio: number;
    cobre: number;
    zinco: number;
    selenio: number;
    retinol: number;
    vitamina_a: number;
    tiamina: number;
    riboflavina: number;
    niacina: number;
    niacina_ne: number;
    piridoxina: number; 
    cobalamina: number;
    folato: number;
    vitamina_d: number;
    vitamina_e: number;
    vitamina_c: number;

    constructor(
        id: number,
        preparacao: number,
        energia: number,
        proteina: number,
        lipidio: number,
        carboidrato: number,
        fibra: number,
        colesterol: number,
        agsaturado: number,
        agmono: number,
        agpoli: number,
        aglinoleico: number,
        aglinolenico: number,
        agtranstotal: number,
        acucartotal: number,
        acucaradicao: number,
        calcio: number,
        magnesio: number,
        manganes: number,
        fosforo: number,
        ferro: number,
        sodio: number,
        sodioadicao: number,
        potassio: number,
        cobre: number,
        zinco: number,
        selenio: number,
        retinol: number,
        vitamina_a: number,
        tiamina: number,
        riboflavina: number,
        niacina: number,
        niacina_ne: number,
        piridoxina: number,
        cobalamina: number,
        folato: number,
        vitamina_d: number,
        vitamina_e: number,
        vitamina_c: number
    ) {
        this.id = id
        this.preparacao = preparacao
        this.energia = energia
        this.proteina = proteina
        this.lipidio = lipidio
        this.carboidrato = carboidrato
        this.fibra = fibra
        this.colesterol = colesterol
        this.agsaturado = agsaturado
        this.agmono = agmono
        this.agpoli = agpoli
        this.aglinoleico = aglinoleico
        this.aglinolenico = aglinolenico
        this.agtranstotal = agtranstotal
        this.acucartotal = acucartotal
        this.acucaradicao = acucaradicao
        this.calcio = calcio
        this.magnesio = magnesio
        this.manganes = manganes
        this.fosforo = fosforo
        this.ferro = ferro
        this.sodio = sodio
        this.sodioadicao = sodioadicao
        this.potassio = potassio
        this.cobre = cobre
        this.zinco = zinco
        this.selenio = selenio
        this.retinol = retinol
        this.vitamina_a = vitamina_a
        this.tiamina = tiamina
        this.riboflavina = riboflavina
        this.niacina = niacina
        this.niacina_ne = niacina_ne
        this.piridoxina = piridoxina
        this.cobalamina = cobalamina
        this.folato = folato
        this.vitamina_d = vitamina_d
        this.vitamina_e = vitamina_e
        this.vitamina_c = vitamina_c
    }
}

export default ProdPrep;