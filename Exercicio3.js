const prompt = require('prompt-sync')();

while (true) {
    let notaDigitada = prompt("Digite a nota (ou digite 'fim' para parar): ");

    if (notaDigitada.toLowerCase() === "fim") {
    break; 
    }

    let notaEmNumero = Number(notaDigitada);

    if (isNaN(notaEmNumero)) {
    console.log("Por favor, digite um número válido ou 'fim'.");
    continue; 
    }

    if (notaEmNumero >= 7) {
    console.log("Aprovado");
    } else if (notaEmNumero >= 5 && notaEmNumero < 7) {
    console.log("Recuperação");
    } else {
    console.log("Reprovado");
    }
}

console.log("Programa encerrado.");