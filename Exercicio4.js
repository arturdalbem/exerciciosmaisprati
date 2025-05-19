const prompt = require('prompt-sync')();

function calcularAreaQuadrado(lado) { 
  return lado * lado;
}

function calcularAreaTriangulo(base, altura) { 
  return (base * altura) / 2;
}

function celsiusParaFahrenheit(celsius) { 
  return (celsius * 9/5) + 32;
}

function gerarNumeroAleatorio() { 
  return Math.floor(Math.random() * 50) + 1;
}


console.log("Menu:"); 
console.log("1. Calcular a área do quadrado");
console.log("2. Calcular a área do triângulo");
console.log("3. Transformar Celsius para Fahrenheit");
console.log("4. Gerar um número aleatório entre 1 e 50");


let escolha = prompt("Digite o número da opção desejada: "); 


switch (escolha) {
    case "1":
    let ladoQuadrado = parseFloat(prompt("Digite o lado do quadrado: ")); 
    if (isNaN(ladoQuadrado)) {
        console.log("Entrada inválida. Por favor, digite um número.");
    } else {
        let areaQuadrado = calcularAreaQuadrado(ladoQuadrado);
        console.log(`A área do quadrado é: ${areaQuadrado}`);
    }
    break;

    case "2":
    let baseTriangulo = parseFloat(prompt("Digite a base do triângulo: ")); 
    let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo: "));
    if (isNaN(baseTriangulo) || isNaN(alturaTriangulo)) {
        console.log("Entrada inválida. Por favor, digite números.");
    } else {
        let areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
        console.log(`A área do triângulo é: ${areaTriangulo}`);
    }
    break;

    case "3":
    let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em Celsius: ")); 
    if (isNaN(temperaturaCelsius)) {
        console.log("Entrada inválida. Por favor, digite um número.");
    } else {
        let temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
        console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F`);
    }
    break;

    case "4":
    let numeroAleatorio = gerarNumeroAleatorio(); 
    console.log(`Número aleatório gerado: ${numeroAleatorio}`);
    break;


    default:
    console.log("Opção inválida. Por favor, escolha uma opção de 1 a 4.");  
}