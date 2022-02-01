
const sequencia = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const produtos = {}

function adiocionarProduto(produto){
    if (!produto.id) produto.id = sequencia.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos) 
}

function rmProduto(id){
    const produto = produtos[id]
    delete(produtos[id]) 
    return produto
}

module.exports = {adiocionarProduto, getProduto, getProdutos, rmProduto}

