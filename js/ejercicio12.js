//Crea un programa que genere un número aleatorio entre 1 y 10. Luego usa un bucle para permitir al usuario adivinar el número. Si el usuario adivina correctamente, felicítalo y detén el bucle. Si no, indica si el número que ingresó es mayor o menor al número generado.

let numeroSecreto = Math.floor(Math.random() * 10) + 1;

let adivinanza = parseInt(prompt("Adivina el número entre 1 y 10: "));

while (adivinanza !== numeroSecreto) {
    if (adivinanza < numeroSecreto) {
        alert("El número es mayor. Intenta de nuevo.");
    } else {
        alert("El número es menor. Intenta de nuevo.");
    }

    adivinanza = parseInt(prompt("Adivina el número entre 1 y 10: "));
}

alert("¡Felicidades! Adivinaste el número: " + numeroSecreto);