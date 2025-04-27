//Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el usuario ingresa 12345, el programa debe devolver 54321.

let numero = parseInt(prompt("Introduce un número entero positivo:"));
let invertido = 0;

while (numero > 0) {
    let ultimoDigito = numero % 10;
    invertido = invertido * 10 + ultimoDigito;
    numero = Math.floor(numero / 10);
}

console.log("El número invertido es: " + invertido);