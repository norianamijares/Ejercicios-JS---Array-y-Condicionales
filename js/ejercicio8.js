let numero = parseInt(prompt("Introduce un número entero positivo:"));
let invertido = 0;

while (numero > 0) {
    let ultimoDigito = numero % 10;
    invertido = invertido * 10 + ultimoDigito;
    numero = Math.floor(numero / 10);
}

console.log("El número invertido es: " + invertido);