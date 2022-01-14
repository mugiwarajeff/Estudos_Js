// vamos mostrar mais ou menos como funciona um array sendo que ele é um objeto

const quaseArray = {0: "maluzinha", 1: "jeffinho", 2: "caiosan"};

Object.defineProperty(quaseArray, "toString", {value: function(){
    return Object.values(this)},
    enumerable: false
})

console.log(quaseArray.toString());
console.log(quaseArray[0])