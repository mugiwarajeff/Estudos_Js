function multiplicaVetor1(vetorNumerico, nInt){
    let vetorRetorno = [];
    for (c in vetorNumerico){ //também podemos usar a função forEach
        vetorRetorno.push(vetorNumerico[c] * nInt);
    }
    return vetorRetorno;
}

function multiplicaVetor2(vetorNumerico, nInt){
    let vetorRetorno = [];
    for (c in vetorNumerico){
        if (vetorNumerico[c] > 5){
            vetorRetorno.push(vetorNumerico[c] * nInt);
        }
    }
    return vetorRetorno;
}

console.log(multiplicaVetor1([1, 2, 3], 2))
console.log(multiplicaVetor2([1, 6, 3], 2))


