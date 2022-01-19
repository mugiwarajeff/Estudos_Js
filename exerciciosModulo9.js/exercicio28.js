function filtrarPorQuantidadeDeDigitos(array, digitos){
    const emString = array.map(valor => String(valor));
    
    const filtrados = emString.filter(valor => valor.length == digitos)
    
    return filtrados.map(valor => Number(valor));
}


console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))