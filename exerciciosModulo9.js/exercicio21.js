function menorNumeroArray(arrayNumeros){
    let menorNumero = arrayNumeros[0];
    for (let i = 1; i < arrayNumeros.length; i++){
        if (arrayNumeros[i] < menorNumero){
            menorNumero = arrayNumeros[i];
        }
    }
    return menorNumero;
}

const arraydoido = [7, 2, 3, 4, 5];

console.log(menorNumeroArray(arraydoido));