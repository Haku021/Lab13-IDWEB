let listaNumeros= [12,34,76,34,65];
let nuevaLista= [];
let i=0;

function doblarNumeros(lista){
    for(let n of lista ){
        nuevaLista[i]= n*2;
        i++;
    }return nuevaLista;
}
console.log("Doble de la lista de numeros",doblarNumeros(listaNumeros));

