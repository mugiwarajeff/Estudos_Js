// getters e setters são tecnicas utilizadas para se encabsular atributos de uma forma mais controlada 
// fazendo com que possamos acessar e alterar metodos privados
// o js não possui metodos privados, então por convenção eles tem um underline_ antes dos nomes

const sequencia = {
    _valor : 1,
    get valor(){return this._valor++},
    set valor(numero){if (numero > this._valor){
        this._valor = numero
    }}
}

sequencia.valor = 50;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 30;
console.log(sequencia.valor);