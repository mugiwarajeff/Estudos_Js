Array.prototype.filter2 = function(callback){
    newArray = [];
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray;
}

const produtos = [
    {nome: "notebook", preco: 2499, fragil: true},
    {nome: "iPad Pro", preco: 4199, fragil: true},
    {nome: "copo de vidro", preco: 12.49, fragil: true},
    {nome: "copo de plastico", preco: 18.99, fragil: false},

]

function seFragil(p){
    return p.fragil == true;
}

function precoAlto(p){
    return p.preco > 2000;
}

filtrados = produtos.filter2(precoAlto).filter2(seFragil);
console.log(filtrados)