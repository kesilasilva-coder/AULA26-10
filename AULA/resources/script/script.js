// funções no javascript

// function saudacao() {
// return "Seja Bem-Vindo";
// }

// let mensagem = saudacao();

// console.log(mensagem);
// function multiply(a,b){
// if(isNaN(a)  || isNaN(b)){
// return "erro, digite um valor válido";   
// }
// return a * b;
// }
// let num1 = Number(prompt("Digite um número"));
// let num2 = Number(prompt("Digite mais um número"));

// let produto = multiply (num1,num2);
// console.log(produto);
// function somar(num1, num2) {
// return num1 + num2;
// }

// console.log(somar(9,4));

// function verificarPar(numero) {
// if (numero % 2 == 0) {
// return "Par";
// } else {
// return "Ímpar";
// }
// }

// console.log(verificarPar(8));

function calcularMedia(n1, n2, n3) {
return (n1 + n2 + n3) / 3;
}
function verificarAprovacao(media) {
if (media >= 7) {
return "Aprovado";
} else if (media >= 5) {
return "Recuperação";
} else {
return "Reprovado";
    }
}

let media = calcularMedia(4,7,9);
console.log(verificarAprovacao(media));