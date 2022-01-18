function removerPropriedade(objeto, propriedade){
    const copia = Object.assign({}, objeto)
    delete(copia[propriedade]);
    return copia;
}

const obj1 = {a:1, b:2};
console.log(removerPropriedade(obj1, "b"));


