const prompt = require('prompt-sync')();

let soma = 0; 

for (let i = 0; i < 5; i++) { 
    let numero = Number(prompt(`Digite o ${i + 1}º número: `)); 

    if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número válido.");
    i--; 
    continue; 
    }

    soma += numero; 
}


console.log(`A soma dos números digitados é: ${soma}`);