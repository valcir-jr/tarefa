import Funcionario from "./FuncionarioClass";

class Horista extends Funcionario {
  public horas: number;
  public funcao: string;

  constructor(
    matricula: number,
    nome: string,
    idade: number,
    email: string,
    salario: number,
    horas: number,
    funcao: string
  ) {
    super(matricula, nome, idade, email, salario);
    this.horas = horas;
    this.funcao = funcao;
  }

  public validaEmail(): boolean {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(this.email)) {
      let pos = this.email.indexOf("@");
      let email_test = this.email.slice(pos, this.email.length);

      if (
        email_test.includes("@adm.xpto.tec.br") ||
        email_test.includes("@dev.xpto.tec.br") ||
        email_test.includes("@vendas.xpto.tec.br")
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public calcSalario(): number {
    let sal_liq = this.calcSalarioBruto() + this.calcDsr() - this.calcINSS();
    return sal_liq;
  }

  public calcINSS(): number {
    let sal_cont = this.calcSalarioBruto() + this.calcDsr();

    if (sal_cont <= 1412.0) {
      let inss = sal_cont * (7.5 / 100);
      return inss;
    } else if (sal_cont <= 2666.68) {
      let inss = sal_cont * (9 / 100);
      return inss;
    } else if (sal_cont <= 4000.03) {
      let inss = sal_cont * (12 / 100);
      return inss;
    } else {
      let inss = sal_cont * (14 / 100);
      return inss;
    }
  }

  public calcDsr(): number {
    let dsr = (this.calcSalarioBruto() / 25) * 4;
    return dsr;
  }

  public calcSalarioBruto(): number {
    let sb = this.salario * this.horas;
    return sb;
  }
}

export default Horista;
