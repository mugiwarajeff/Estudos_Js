// vamos implementar um metodos forEach2 para simular o comportamento

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}


const alunos = ["maluzinha", "jefferson", "fulano", "qualquer um ai"];

alunos.forEach2((nome, indice) => console.log(nome, indice));
