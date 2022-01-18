function primeiroUltimoArray(array){
    let primeiro = array[0];
    let ultimoIndice = array.length
    let ultimo = array[ultimoIndice - 1];

    return [primeiro, ultimo]
}

let arrayNumeros = [0, 1, 2, 3, 4];
console.log(primeiroUltimoArray(arrayNumeros));