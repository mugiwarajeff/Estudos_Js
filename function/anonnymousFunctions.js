// funcções anonimas basicamente são funções criadas sem nome e podem ser armazenadas em variaveis ou chamadas dentros de outras funções
const soma = function(a, b){
    return a + b;
}

const imrprimirResultado = function(a, b, operacao=soma){ //isso já é uma função anonima em uma variavel
    console.log(operacao(a, b));
}

imrprimirResultado(5, 7, function(a, b){
    return a - b;
});
