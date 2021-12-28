function maiorValorVetor(vetorNumeros){
    let maior = vetorNumeros[0];
    let menor = vetorNumeros[0];
    for (c in vetorNumeros){
        if (vetorNumeros[c] > maior){
            maior = vetorNumeros[c];
        }
        if (vetorNumeros[c] < menor){
            menor = vetorNumeros[c];
        }
    }
    return `O maior valor é ${maior} e o menor valor é ${menor}`;
}

console.log(maiorValorVetor([-5, 1, 2, 3, 4, 15, 5, 6, 7, 8, 9]))