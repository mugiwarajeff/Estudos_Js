function quantidadeParesImpares(vetorComNumeros){
    let pares = [];
    let impares = [];

    for (c in vetorComNumeros){
        if (vetorComNumeros[c] % 2 == 0){
            pares.push(vetorComNumeros[c]);
        }else{
            impares.push(vetorComNumeros[c]);
        }
    }
    
    console.log("Pares: ");
    for (c in pares){
        console.log(`${pares[c]}`);
    }

    console.log("Impares: ");
    for (c in impares){
        console.log(`${impares[c]}`);
    }
}

quantidadeParesImpares([1,2,3,4,5,6,7,8,9,10]);