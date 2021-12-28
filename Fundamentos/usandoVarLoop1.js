// Comportamento de uma variavel declarada com Var dentro de uma laço for 

for (var i = 0; i < 10; i++) {

    console.log(i);
};

console.log(i); //retorno ==> 10, pois não existe escopo de bloco para var
console.log(i); //retorno ==> 10, pois não existe escopo de bloco para var
