function formataReal(valor){
    return `R$${valor.toFixed(2).toString().replace(".", ",")}`
}

console.log(formataReal(0.3000000));
