const numeros = [23, 45, 67, 34, 89, 21];

let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

console.log("El número más grande es: " + mayor);