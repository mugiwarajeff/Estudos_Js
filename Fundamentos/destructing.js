
// também temos um operador que saiu na ultima atualização do js, que permite a extração de atributos de dentro de objetos e arrays 

// usar chaves para objtos e colchetes para arrays

Pessoa = {
    nome: "jefferson", 
    sobrenome: "cerqueira",
    endereço:
    {
        rua: "são josé", numero: 33
    }
}

let {nome: n, sobrenome: s, idade: i} = Pessoa;  // podememos mudar o nome das variaveis selecionadas, caso alguma das variaveis não estaja no objetos, será undefined 
console.log(n, s, i);

let {endereço: {rua, numero}, seila: {seil2: "qualquer coisa"}} = Pessoa; //isso gerará um erro, pois o seilá vira como undefinded, e não temos como acessar um item undefinded

console.log(rua, numero, seil2);




