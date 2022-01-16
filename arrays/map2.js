//desafio para função map 
// transformar uma lista de textos json em lista somente com valores de preço

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

const carrinho2 = carrinho.map(transforma);

console.log(carrinho2);