//Criando e exemplificando o proprio operador new

function Aula(titulo, id){
    this.titulo = titulo,
    this.id = id
};

obj = new Aula("olá galera", 123);
console.log(obj);

function novo(f, ...params){
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj
}

obj2 = novo(Aula, "olá galera2", 456);
console.log(obj2);

