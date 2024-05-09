let convertidorGrados = prompt("escribe el grado celsius que quieras convertir")
console.log(convertidorGrados)

function convertiAf (convertidorGrados) {
    let fahrenheit;

    fahrenheit = (convertidorGrados * 9/5) + 32;
    return fahrenheit
}

function convertiK (convertidorGrados) {
    let kelvin;

    kelvin = parseInt(convertidorGrados) + 273.15;
    return kelvin
}

console.log(convertiAf(convertidorGrados));
console.log(convertiK(convertidorGrados ));