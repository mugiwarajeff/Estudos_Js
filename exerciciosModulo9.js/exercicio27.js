function inverteObjeto(object){
    const objetoRetorno = {};
    const valores = Object.values(object);
    console.log(valores);
    const chaves = Object.keys(object);
    console.log(chaves);
    for (c in valores){
        objetoRetorno[valores[c]] = chaves[c];
    }
    return objetoRetorno

}

function inverteObjeto2(object){
    const paresChaveValor = Object.entries(object).map(parChaveValor => parChaveValor.reverse())
    
    return Object.fromEntries(paresChaveValor);
}
console.log(inverteObjeto2({a:1, b:2, c:3}))