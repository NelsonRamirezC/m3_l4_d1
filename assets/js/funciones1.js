function sumar(notas){
    let suma = 0;
    notas.forEach(nota=> {
        suma += nota
    });
    return suma;
}

function promedio(notas){
    let promedio = sumar(notas) / notas.length;
    console.log(promedio.toFixed(3))

}

let notas = [4,3,4]
promedio(notas);


