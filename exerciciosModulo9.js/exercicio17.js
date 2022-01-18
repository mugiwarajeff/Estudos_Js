//Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

const funcaoAcumuladora = (acumulador, valor) => acumulador + valor;

function somaElementosArray(array){
    return array.reduce(funcaoAcumuladora);
}

const arrayExemplo = [10, 10, 10];

console.log(somaElementosArray(arrayExemplo));
