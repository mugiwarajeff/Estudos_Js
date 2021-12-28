function intervalo(vetorDeNumeros){
    let valoresIntervalo = [];
    let contadorIntervalo = 0;
    for (c in vetorDeNumeros){
        if (vetorDeNumeros[c] >= 10 && vetorDeNumeros[c] <= 20){
            valoresIntervalo.push(vetorDeNumeros[c]);
            contadorIntervalo++;
        } 
    }

    return `${contadorIntervalo} números fazem parte do intervalo entre 10 e 20 e são: ${valoresIntervalo}`;
}

console.log(intervalo([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 19, 20]));
