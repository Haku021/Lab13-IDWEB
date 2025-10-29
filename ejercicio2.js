let lista= [-6,10,5,-76,39,-23];
let nuevaList= [];
let i=0;
let sumaTotal=0;

function filtrarYTransformar(arr){
    for( let n of arr){
        if(n>0){
            nuevaList[i]=n**2;
            sumaTotal +=n**2;
        }
        i++;
    }return sumaTotal;
}
console.log("La suma de los cuadrados de los números no negativos es:",
    filtrarYTransformar(lista));
