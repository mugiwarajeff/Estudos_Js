function segundoMaiorNumero(array){
    ordenados = array.sort((n1, n2) => n2 - n1);

    return ordenados[1];
}


console.log(segundoMaiorNumero([12, 16, 1, 5]));