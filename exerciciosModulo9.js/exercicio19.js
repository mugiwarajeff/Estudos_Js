function calcularMedia(array){
    const valorTotal = array.reduce((acumulador, atual) => acumulador + atual);
    return valorTotal / array.length
}

const arrayTeste = [1, 2, 3, 4, 5];
console.log(calcularMedia(arrayTeste));