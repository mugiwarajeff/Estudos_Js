function MediaAritmeticaVetor(vetorNumeros){
    let somaVetor=0, tamanhoVetor=0;
    for (c in vetorNumeros){
        tamanhoVetor++;
        somaVetor += vetorNumeros[c];
    }
    return `A média aritimetica do vetor informado é ${somaVetor / tamanhoVetor}`;

}

console.log(MediaAritmeticaVetor([2, 2, 5]));

