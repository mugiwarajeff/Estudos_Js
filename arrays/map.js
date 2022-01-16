/**
 * map faz a transformação de um arry, mapeando um array com x elemenos em um array2 de x elementos também
 * Receberá uma função call back que será aplicada para todos os valores do array
 * Essa função callback, assim como forEach tem os parametros, valor, indice e array
 * Map nunca altera o array atual e sim retorna valores para um segundo array
 * Podemos empilhar maps, uma vez que o retorno dessa função é sempre outro array
 */

const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map(value => value*2);

console.log(duplicados);