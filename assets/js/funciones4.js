//funciones anidadas

/* function saludar(nombre){
    let saludo = "Hola, " + nombre;
    
    function imprimir(saludar){
        console.log(saludar)
    }

    imprimir(saludo);

}


saludar("Pedro") */


function imprimir(saludar){
    console.log(saludar)
}

function saludar(nombre, callback){
    let saludo = "Hola, " + nombre;

    callback(saludo);

}

saludar("Pedro", imprimir);