import Horista from "./HoristaClass";
import Mensalista from "./MensalistaClass";

var mensalistas: Array<Mensalista> = [];
var mensalista = new Mensalista(1, "Joaquim Barbosa", 18, "joaquim.barbosa@adm.xpto.tec.br", 2543.12, 1, "Estagiário");
mensalistas.push(mensalista);
mensalista = new Mensalista(2, "Marcos da Silva", 21, "marcos.silva@dev.xpto.tec.br", 3451.22, 2, "Analista de Sistemas");
mensalistas.push(mensalista);
mensalista = new Mensalista(3, "Ana Maria Brega", 25, "ana.brega@vendas.xpto.tec.br", 5610.3, 3, "Auxiliar de Vendas");
mensalistas.push(mensalista);
mensalista = new Mensalista(4, "Paulo França", 18, "paulo.franca@dev.xpto.tec.br", 8930.10, 4, "Desenvolvedor");
mensalistas.push(mensalista);
mensalista = new Mensalista(5, "Edson Arantes", 30, "edson.arantes@gmail.sp.gov.br", 2328.97, 0, "Gerente");
mensalistas.push(mensalista);

var horistas: Array<Horista> = [];
var horista = new Horista(6, "Antonio Marcos", 38, "antonio.marcos@adm.xpto.tec.br", 35, 100, "Técnico em Redes");
horistas.push(horista);
horista = new Horista(7, "Erasmo Carlos", 45, "erasmo.carlos@dev.xpto.tec.br", 50, 220, "Desenvolvedor");
horistas.push(horista);
horista = new Horista(8, "José Augusto", 36, "jose.augusto@vendas.xpto.tec.br", 40, 200, "Vendedor");
horistas.push(horista);
horista = new Horista(9, "Elis Regina", 25, "elis.regina@adm.xpto.tec.br", 30, 220, "Contadora");
horistas.push(horista);
horista = new Horista(10, "Gal Costa", 39, "meu_nome_eh_gal@gmail.com", 25, 110, "Estagiária");
horistas.push(horista);

function leftPad(n: number, w: number, p: string = "0") { // n valor a ser formatado
    return n.toString().padStart(w, p);                   // w quantidade de dígitos
}

function emailValido(test: boolean) {
    if(test) {
        return "Válido"
    } else {
        return "Inválido"
    }    
}


for(let i: number = 0; i < mensalistas.length; i++) {
    console.log("<<MENSALISTA>>");
    console.log("Matrícula: ", leftPad(mensalistas[i].matricula, 5, "0"));
    console.log("Nome: ", mensalistas[i].nome);
    console.log("e-Mail: ", mensalistas[i].email + " - " + emailValido(mensalistas[i].validaEmail()) );
    console.log("Idade: ", mensalistas[i].idade);
    console.log("Cargo: ", mensalistas[i].cargo);

    console.log("(+) Salário Mês....: ", mensalistas[i].salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
    console.log("(-) Falta(s).......: ", mensalistas[i].calcFaltas().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}) +
                " - " + leftPad(mensalistas[i].faltas, 2, "0") + " dia(s)");

    console.log("(-) INSS...........: ", mensalistas[i].calcINSS().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
    console.log("(=) Salário Líquido: ", mensalistas[i].calcSalario().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}), "\n");
}


for(let i: number = 0; i < horistas.length; i++) {
    console.log("<<HORISTA>>");
    console.log("Matrícula: ", leftPad(horistas[i].matricula, 5, "0"));
    console.log("Nome: ", horistas[i].nome);
    console.log("e-Mail: ", horistas[i].email + " - " + emailValido(horistas[i].validaEmail()));
    console.log("Idade: ", horistas[i].idade);
    console.log("Função: ", horistas[i].funcao);
    console.log("Quantidade Horas Trabalhadas no mês: ", leftPad(horistas[i].horas, 3, "0"));

    console.log("Valor Hora.........: ", horistas[i].salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
    console.log("(+) Salário Bruto..: ", horistas[i].calcSalarioBruto().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
    console.log("(+) DSR............: ", horistas[i].calcDsr().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
    console.log("(=) Salário Mês....: ", ( horistas[i].calcDsr() + horistas[i].calcSalarioBruto() ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
    console.log("(-) INSS...........: ", horistas[i].calcINSS().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
    console.log("(=) Salário Líquido: ", horistas[i].calcSalario().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}), "\n");
}