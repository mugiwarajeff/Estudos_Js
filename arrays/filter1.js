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

filtrados = produtos.filter(precoAlto).filter(seFragil);
console.log(filtrados)