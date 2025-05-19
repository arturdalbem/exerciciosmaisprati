const prompt = require('prompt-sync')();

function verificarTriangulo(a, b, c) { 
    return a < b + c && b < a + c && c < a + b;
}

function determinarTipoTriangulo(a, b, c) { 
    if (a === b && b === c) {
    return "Equilátero";
    } else if (a === b || a === c || b === c) {
    return "Isósceles";
    } else {
    return "Escaleno";
    }
}

let ladoA = parseFloat(prompt("Digite o lado A do triângulo: "));
let ladoB = parseFloat(prompt("Digite o lado B do triângulo: "));
let ladoC = parseFloat(prompt("Digite o lado C do triângulo: "));

if (verificarTriangulo(ladoA, ladoB, ladoC)) {
    let tipoTriangulo = determinarTipoTriangulo(ladoA, ladoB, ladoC);
    console.log(`Os lados formam um triângulo ${tipoTriangulo}.`);
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}