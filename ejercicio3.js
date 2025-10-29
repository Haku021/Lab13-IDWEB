let cadena= "lunes martes miercoles jueves";
let arreglo=[];

function reordenarPalabras(oracion){
    let palabras= oracion.split(" ");
    arreglo=palabras.sort().map(palabra => palabra.toUpperCase());

    return arreglo;
}
console.log("Oración ordenada por alfabeto y en mayuscula",
    reordenarPalabras(cadena));

