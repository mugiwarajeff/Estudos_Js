// basicamente, funções que são tratadas como cidadão de primeira linha, são tratadas como um tipo de dado
// então, podem ser armazenadas em variaveis, colocadas em arrays ou até mesmo elementos de um objeto

function fun1(){
    console.log("olá");
}

funcs = [fun1, function fun2(){console.log("olá2")}]


objs = {nome : "jefferson",
        falar: function() {console.log(`meu nome é ${this.nome}`)}
}

function somaAB(a, b){
    return a + b
}

function somaTudo(ab, c){
    console.log(ab + c)
}

somaTudo(somaAB(3, 5), 8);






