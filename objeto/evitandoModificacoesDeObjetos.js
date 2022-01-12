const obj1 = {
    nome: "preventExtension",
    id: 1
}

Object.preventExtensions(obj1);
obj1.idade = 20;
delete(obj1.id);
console.log(obj1);
console.log(Object.isExtensible(obj1));

const obj2 = {
    nome: "seal",
    id: 2
}

Object.seal(obj2);
obj2.idade = 20;
delete(obj2.id);
console.log(obj2);
console.log(Object.isSealed(obj2));


const obj3 = {
    nome: "freeze",
    id: 3
}

Object.freeze(obj3);
obj3.qualquercoisa = true;
console.log(obj3)