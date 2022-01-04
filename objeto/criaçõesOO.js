// temos algumas formas de poder criar um objeto

// forma literal
const obj = {
    
}

// instanciando com new
const obj2 = new Object;

//funções contrutoras

function Produto(nome, valor){
    this.nome = nome;
    this.valor = valor;
}
const obj3 = new Produto("cadeira", 200);


// funções factory

function criarProduto(nome, valor){
    return {
        nome, 
        valor,
    }
}

const obj4 = criarProduto("mesa", 400);

// função create do object 

const obj5 = Object.create(null);

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);