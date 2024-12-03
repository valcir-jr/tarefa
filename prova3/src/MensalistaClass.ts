import Funcionario from "./FuncionarioClass";

class Mensalista extends Funcionario {
  public faltas: number;
  public cargo: string;

  constructor(
    matricula: number,
    nome: string,
    idade: number,
    email: string,
    salario: number,
    faltas: number,
    cargo: string
  ) {
    super(matricula, nome, idade, email, salario);
    this.faltas = faltas;
    this.cargo = cargo;
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
    let sal_liq = this.salario - this.calcFaltas() - this.calcINSS();
    return sal_liq;
  }

  public calcINSS(): number {
    let sal_cont = this.salario - this.calcFaltas();

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

  public calcFaltas(): number {
    let fts: number = (this.salario / 30) * this.faltas;
    return fts;
  }
}

export default Mensalista;
