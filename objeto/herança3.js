//trabalhando com a função objetc.create
//Podemos utilizar dessa função para ja criar objetos com relação de prototipo

const pai = {
    sobrenome: "Silva",
    corCabelo: "platina"
}

const filha = Object.create(pai);
filha.nome = "Ana";

console.log(`a filha ${filha.nome} tem a cor de cabelo ${filha.corCabelo}`);

const filha2 = Object.create(pai, {nome: {
    writable:false,
    value: "Bia",
    enumerable: true,
}
})

for (attr in filha2){
    if (filha2.hasOwnProperty(attr)){
        console.log(attr);
    }else{
        console.log(`POR HERANÇA: ${attr}`)
    };
    
}

for (attr in filha2){
    filha2.hasOwnProperty(attr) ? console.log(attr) : console.log(`POR HERANÇA ${attr}`) // exemplo com operador ternario
}