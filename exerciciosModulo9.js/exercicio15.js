const filtraPar = (valor, indice) => valor % 2 == 0 && indice % 2 == 0;

function receberSomenteParesDeIndicesPares(array){
    return array.filter(filtraPar);
}

arrayTeste = [10, 70, 22, 43];
console.log(receberSomenteParesDeIndicesPares(arrayTeste));