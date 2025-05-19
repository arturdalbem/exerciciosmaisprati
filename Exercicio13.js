const prompt = require('prompt-sync')();

let soma = 0;
let quantidadeNumeros = 0;
let numero;


while (true) { 
    numero = Number(prompt("Digite um número decimal (ou 0 para calcular a média): "));

    if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número válido.");
    continue; 
    }

    if (numero === 0) {
    break; 
    }

    soma += numero;
    quantidadeNumeros++;
}
if (quantidadeNumeros === 0) {
    console.log("Nenhum número foi digitado além de 0. A média é 0.");
} else {
    let media = soma / quantidadeNumeros;
    console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
}