//refazendo metodo map 

Array.prototype.map2 = function(callback){
    newArray =[]
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i]))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "valor": 37}',
    '{"nome": "lapis", "valor": 60}',
    '{"nome": "caderno", "valor": 85}',
    '{"nome": "caneta", "valor": 5}',           
]

function transforma(valor){
    let convertido = JSON.parse(valor);
    return convertido.valor;
}

const carrinho2 = carrinho.map2(transforma);

console.log(carrinho2);