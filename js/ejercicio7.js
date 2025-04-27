//Escribe un programa que use un bucle para pedir al usuario números enteros. Suma esos números y detén el bucle cuando el acumulado sea mayor o igual a 100. Muestra el total acumulado.

let suma = 0;

while (suma < 100) {
    let numero = parseInt(prompt("Introduce un número entero:"));

    suma += numero;
}

console.log("El total acumulado es: " + suma);