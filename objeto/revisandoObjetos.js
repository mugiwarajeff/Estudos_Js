// objetos dinamicos são coleções de pares com chaves e valores

const produto = new Object;
produto.nome = "cadeira";
produto.preco = 20;

const carro = {
    cor: "amarelo",
    valor: 50000,
    dono: {
        nome: "jefferson",
        idade: 19,
        endereco: {
            logradouro: "rua ernesto dantas",
            n: 85
        }
    },
    condutores: ["pai", "mãe"],
    getValorImposto: function(){ 
        return carro.valor * (5/100)
    }
}

console.log(carro.dono.endereco.n);
console.log(carro.dono.idade);
console.log(carro.getValorImposto())
