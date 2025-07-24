import ValidarCPF from "./validar-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCPF = new ValidarCPF(cpf).iniciar();

const validadorCPF = new ValidarCPF(); 

console.log(validadorCPF.validar("111 111 111 22"))

console.log(validarCPF);
