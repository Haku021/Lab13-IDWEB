let arreglo= [12,34,12,65,34,21,12];
function tieneDuplicados (arr){
    let sinRepetición= new Set(arr);
    if(sinRepetición.size == arr.length){
        return false;
    }else{
        return true;
    }
}
console.log("Existen repeticiones:",tieneDuplicados(arreglo));
