abstract class Funcionario {
  public matricula: number;
  public nome: string;
  public idade: number;
  public email: string;
  public salario: number;

  constructor(
    matricula: number,
    nome: string,
    idade: number,
    email: string,
    salario: number
  ) {
    this.matricula = matricula;
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.salario = salario;
  }

  public abstract validaEmail(): boolean;
  public abstract calcSalario(): number;
  public abstract calcINSS(): number;
}

export default Funcionario;
