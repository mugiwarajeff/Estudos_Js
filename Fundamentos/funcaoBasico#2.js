// Funções anonimas 

const imprimirSoma = function(a, b) {  //como se atribuissimos uma função para uma variavel
   
    console.log(a + b);
}


// Funções arrow:

a = (a,b) => {
    console.log( a + b);
}


a = (a, b) => console.log(a + b); // caso nossa função tenha apenas uma sentença de codigo

const subtracao = (a, b) => a - b;

console.log(subtracao(5,3));

