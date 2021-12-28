//existem 3 formas de declarar uma função 

//function declaration, sofre do efeito de hoisting

console.log(soma(5, 3));
//console.log(sub(5, 3)); gera um erro pois sub não gera hoisting


function soma(a, b){
    return a + b;
}
//function expression, não sofre do efeito de hoisting
const sub = function(a, b){
    return a - b;
} 
//named function expression, não sofre do efeito de hoisting, menos utilizado tem utilizades especidifcas

const mult = function mult(a, b){
    return a * b;
}
