// este modulo tratará dos novos recuros so ecmaScript que surgiram na versão 6,7 e 8

// surgimento da nova forma de declaração const para constante e let que definia um novo escopo de bloco

{
    var a = "a";
    let b = "b";
    console.log(b);
}

//console.log(a, b); isso da erro, pois b fica not defined
console.log(a);

//Template Strings

let nome = "jefferson";

console.log(`olá meu querido ${nome}`);

//operador destructuring

let [l,e, ...tras] = "letras";

console.log(l, e, tras);

let [v1, v2] = [1, 2];
console.log(v1, v2);
