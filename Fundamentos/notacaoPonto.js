// a notação ponto é usada principalmente para acessar funções dentro de outras funções ou objetos

const obj = {};

obj.nome = "bola"; // notação ponto para acessar a variavel nome do obj

function Obj (nome) {
    this.nome = nome
}

obj1 = new Obj("cadeira"); // tem que usar o new para instanciar a função como se fosse um objeto
obj2 = new Obj("mesa");

console.log(obj1.nome, obj2.nome);



