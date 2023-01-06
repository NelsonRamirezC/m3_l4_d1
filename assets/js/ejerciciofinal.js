const ivaAgrega = 1.19;

function operacion(monto,descuento) {
    let monto2 = (monto * ivaAgrega);
    let resultado = (monto2 - descuento);
    return resultado;
}


let resultado = operacion(10000, 1000)

console.log(resultado);