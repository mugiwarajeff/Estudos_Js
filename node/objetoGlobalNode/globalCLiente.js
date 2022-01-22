require("./global");


console.log(saudacao.valor)

saudacao.valor = "olá, eu sou maluzinha"; // não foi modificado por conta do freeze dado no arquivo global
console.log(saudacao.valor)