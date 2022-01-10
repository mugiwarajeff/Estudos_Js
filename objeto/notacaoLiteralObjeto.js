//melhorias no ea 2015 sobre notação literal de objeto

// Se o nome da constante e do atributo forem os mesmos, podemos passar apenas uma vez a referencia

const a = 1;
const b = 2;
const c = 3;

const obj1 = {a,
b,
c};

console.log(obj1);

//funções de forma reduzida

obj2 = {funcao2(){
    return "olá mundo"
}}

//Podemos criar nomes de atributos com strings de forma dinamica 

obj3 = {["nome2"]: "jefferson2"};

obj3["nome"] = "jefferson";
console.log(obj3)