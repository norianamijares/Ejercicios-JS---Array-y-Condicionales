let filas = parseInt(prompt("Introduce el número de filas para el triángulo:"));

for (let i = filas; i >= 1; i--) {
    let linea = "";

    for (let j = 0; j < i; j++) {
        linea += "*";
    }

    console.log(linea);
}