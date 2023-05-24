var A = prompt("Ingrese valor A");
var B = prompt("Ingrese valor B");
var C = prompt("Ingrese valor C");

var x;

function calcularEcuacion(a,b,c)
{
    var bAlCuadradoMenos4AC = (b*b) - (4*a*c);
    var raizCuadrada = Math.sqrt(bAlCuadradoMenos4AC);
    var resultadoMas = -b + raizCuadrada;
    var resultadoMenos = -b - raizCuadrada;

    var resultado1 = resultadoMas/(2*a);
    var resultado2 = resultadoMenos/(2*a);
   
    return "Resultado 1: "+ resultado1 + " Resultado 2: " + resultado2;
}

//console.log(calcularEcuacion(A,B,C));
console.log("A:"+ A+" B:"+B+" C:"+C)
console.log(calcularEcuacion(A,B,C));
