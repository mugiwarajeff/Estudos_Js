/*function maiorNota(n1,n2,n3){
    let maior = 0;
    let notas = [n1,n2,n3];

    for (c in notas){
        if (notas[c] > maior){
            maior = notas[c];
        }
    }
    return maior;
}

function pegaMenores(maior, n1,n2, n3){
    let menores = [n1, n2, n3];
    let retorno = [];

    for (c in menores){
        if (menores[c] < maior){
            retorno.push(menores[c]);
        }
    }
    return retorno;
}

function calculaNotasAluno(codigoAluno, n1, n2, n3){
    let maior2 = maiorNota(n1,n2,n3);
    let menores = pegaMenores(maior2, n1,n2,n3)
    let mediaPonderada = ((maior2 * 4) + (menores[0] * 3) + (menores[1]*3)) / 10


    return maior2, menores[1], mediaPonderada;
}

*/

function calculaNotasAlunos(codigo, n1, n2, n3){
    let notas = [n1, n2, n3]
    notas.sort((a,b) => a < b ? 1 : -1)

    mediaPonderada = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10

    return `Código do aluno: ${codigo}, com a media final de ${mediaPonderada} e foi ${mediaPonderada < 5 ? "Reprovado" : "Aprovado"}`
    
}

console.log(calculaNotasAlunos(001, 5,6,3));



