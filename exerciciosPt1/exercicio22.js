function anuidade(mes, valorAnuidade){
    if (mes > 0 && mes < 13){
        atraso = mes - 1 
    return `Valor total a ser pago, com juros: R$${valorAnuidade * Math.pow(( 1 + 0.05), atraso)}`

    }else{
        return "Valor Invalido!"
    }
}

console.log(anuidade(3, 1000));