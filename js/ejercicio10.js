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