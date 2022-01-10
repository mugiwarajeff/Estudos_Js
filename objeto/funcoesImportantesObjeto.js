// temos algumas funções importantes quando devemos trabalhar com objetos

const pessoa = {
    nome: "jefferson", 
    sobrenome: "cerqueira"

};

// keys, values e entries

// definindo uma propriedade com outras caracteristicas mais avançadas

Object.defineProperty(pessoa, 'idade', { //nome da property deve estar como string
    enumerable: true,
    writable: false,
    value: 19
})

pessoa.idade = 20


// fazendo concatenação de objetos com assign

obj1 = {a:1};
obj2 = {b:2};
obj3 = {c:3, a:4} // os ultimos elementos podem sobrescrever os primeiros, então o valor final de a, será 4

objresultante = Object.assign(obj1, obj2, obj3)
console.log(objresultante)