let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function adicionaVetores(vetorInicial, vetorAdicionar){
    for (c in vetorAdicionar){
        vetorInicial.push(vetorAdicionar[c]);
    }
    return vetorInicial;
}

console.log(adicionaVetores(vetorPilha, vetorAdiciona));