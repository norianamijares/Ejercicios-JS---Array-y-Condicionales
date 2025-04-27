const edades = [18, 25, 14, 32, 16, 40];

for (let i = 0; i < edades.length; i++) {
    let edad = edades[i];

    if (edad >= 18) {
        console.log(edad + " años - Mayor de edad");
    } else {
        console.log(edad + " años - Menor de edad");
    }
}