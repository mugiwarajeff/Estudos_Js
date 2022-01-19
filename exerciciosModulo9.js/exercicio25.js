
function buscarPalavrasSemelhantes(palavra, arrayDeBusca){
    arrayRetorno = arrayDeBusca.filter(valor => valor.includes(palavra))
    return arrayRetorno;
}


console.log(buscarPalavrasSemelhantes("pro", ["programação", "professor", "mobile"]));
console.log(buscarPalavrasSemelhantes("python", ["programação", "professor", "mobile"]));

