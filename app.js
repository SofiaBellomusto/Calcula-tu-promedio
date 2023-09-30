function calcularPromedio(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    let promedio = total / numeros.length;
    return promedio;
}

//numeros = [2,3,4]
let notas = [];
let nota = prompt(`Ingresa una nota, o presiona 'Aceptar' para terminar:`);

while (nota) {
    notas.push(Number(nota));
    nota = prompt(`Ingresa una nota, o presiona 'Aceptar' para terminar:`);
}

let promedio = calcularPromedio(notas);

if (promedio >= 10) {
    alert("Excelente, tu promedio es " + promedio);
} else if (promedio >= 8) {
    alert("Muy bien, tu promedio es " + promedio);
} else if (promedio >= 6) {
    alert("Bien, tu promedio es " + promedio);
} else {
    alert("Necesitas mejorar, tu promedio es " + promedio);
}
