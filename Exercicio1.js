const prompt = require('prompt-sync')();

let numero = String(prompt("Digite um número inteiro: "));

if (numero % 2 === 0) {
    console.log("O número é PAR.");
} else {
    console.log("O número é ÍMPAR.");
}