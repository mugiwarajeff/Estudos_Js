const arrayProdutos = [
    {
        nome: "Jornal Online",
        categoria: "Informação",
        preco: 89.99
    },
    {
        nome: "Cinema",
        entretenimento: "Entretenimento", 
        preco: 150
    }
]

const getPreco = item => item.preco

function totalDespesas(arrayDeProdutos){
    return arrayDeProdutos.map(getPreco).reduce((acumulador, atual) => acumulador + atual);
}

console.log(totalDespesas(arrayProdutos));