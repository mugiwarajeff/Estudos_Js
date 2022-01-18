function repetir(elemento, vezes){
    arrayRetorno = [];
    for (let cont = 0; cont < vezes; cont++){
        arrayRetorno.push(elemento);
    }
    return arrayRetorno;
}

console.log(repetir(7,3));
