//controlando o parse do template string

function real(partes, ...valores){
    resultado = []
    console.log(partes);
    console.log(valores);
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    console.log(resultado)
    return resultado.join("")
}

const preco = 29.9
const precoParcelado = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcelado}.`);