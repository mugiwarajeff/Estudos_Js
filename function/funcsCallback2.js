// diferença entre aplicação literal e aplicação de uma função callback chamada de filter 


notas = [4, 5, 8, 1, 9, 10, 3];
notasBaixas =[]
for (index in notas){
    if (notas[index] < 7){
        notasBaixas.push(notas[index])
    }

}

console.log(notasBaixas)

notasBaixas2 = notas.filter( function (nota){
    if (nota < 7){
        return nota
    }
});
console.log(notasBaixas2)