//PROBLEM A DE VARIABLES GLOBALES
var a = 100;

function test(){
    console.log(a); //100
    var a = 10;
    console.log(a); //10 - nada 
}

test()
console.log(a) //10 - 100 - 110 - 100