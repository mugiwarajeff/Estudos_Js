const objTeste = {
    nome: "Maria",
    profissao: "professora"
}

function objetoParaArray(objeto){
    const retorno = Object.entries(objeto);
    return retorno;
}

console.log(objetoParaArray(objTeste));