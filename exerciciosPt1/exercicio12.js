//faça um algoritmo que calcule o fatorial de um numero

function fatorial(numero){
    let multiplicavel = 1;
    for (var i = numero; i > 0; i--){
        multiplicavel = multiplicavel * i;
    }
    return multiplicavel;

}

console.log(fatorial(7));