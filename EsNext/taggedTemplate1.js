// tagged tamplates são formas de se utilizar funções aplicadas a templates strings

function tag(strings, ...variaveis){
    console.log(strings);
    console.log(variaveis);
    return "outra string";
}

const nome = "jefferson";
const idade = 19;
console.log(tag `${nome} tem ${idade} anos de idade`);

