//Crea un programa que solicite al usuario una lista de palabras separadas por comas. Usa un bucle para verificar cuáles de esas palabras son palíndromas y muéstralas. Una palabra es palíndroma si se lee igual al derecho y al revés.

let entrada = prompt("Introduce palabras separadas por comas:");
let palabras = entrada.split(",");

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i].trim();

    let invertida = "";
    for (let j = palabra.length -1; j >= 0; j--) {
        invertida += palabra[j];
    }

    if (palabra.toLowerCase() === invertida.toLowerCase()) {
        console.log(`La palabra "${palabra}" es un palíndromo.`);
    } else {
        console.log(`La palabra "${palabra}" no es un palíndromo.`);
    }
}