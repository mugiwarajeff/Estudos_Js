function contaNegativosVetor(vetorNumeros){
    let quantidadeNegativos=0;

    for (c in vetorNumeros){
        if (vetorNumeros[c] < 0){
            quantidadeNegativos++;
        } 
    }
    return `A quantidade de numeros negativos informado foi de: ${quantidadeNegativos}`
}

console.log(contaNegativosVetor([-3, -4, -1, 0, 2, 3, 5]));