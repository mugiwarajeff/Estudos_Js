// Existem diversas formas de se chamar uma função, e com isso podemos chamar atrávez desses dois metodos, que se diferem apenas em como os parametros devem ser passados

function getPreco(imposto=0, moeda="R$"){
    return `${moeda} ${this.preco - this.preco * (this.desc / 100) - this.preco * (imposto/100)}`
}

carro = {
    nome: "camaro",
    preco:  10000,
    desc: 5,
    getPreco
};

notebook = {
    nome: "dell",
    preco: 3000,
    desc: 50,
    getPreco,
};


console.log(getPreco.call(carro, 10));
console.log(getPreco.apply(notebook, [10, "USD"]));