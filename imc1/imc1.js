let peso = prompt("Digite seu peso");
let altura = prompt("Digite sua altura:");

altura = altura * altura;

let imc = peso/altura;

let verificaIMC = imc >= 30;

console.log(verificaIMC, imc);
