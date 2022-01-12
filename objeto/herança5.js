// String, Array e até mesmo o Object, todos são functions que possuem seus .prototype
// então apesar de não devermos alterar, por implicar em possiveis complicações, podemos fazer adição de atributos nesse prototype ou modificar

Array.prototype.first = function() {
    return this[0];
}

String.prototype.reverse = function(){
    return this.split("").reverse().join("")
}
let listaValores = ["na","mo","ra","da"];

console.log(listaValores.first());
console.log("tudo torto".reverse());
