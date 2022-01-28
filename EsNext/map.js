//map é uma estrutura de dados que funciona semelhante a um objeto, com chaves e valores 
//porém as chaves são mais variadas, podendo ser funções, numeros e etc

const tecnologias = new Map()

tecnologias.set("react", {framework:false});
tecnologias.set("angular", {frameworkd: true}); //define um par de chave e valor dentro da estrutura

console.log(tecnologias);
console.log(tecnologias.get("react")); // paga pegar algum valor devemos utilizar o metodo get

const chavesVariasdas = new Map([
    [function(){}, "função"],
    [{}, "objeto"],
    [123, "numeros"]
])

console.log(chavesVariasdas.size) // metodo size retorna a quantidade de pares que existem dentro do map
console.log(chavesVariasdas.has(123)) //metodo has que retorna se algum metodo percente a estrutura
chavesVariasdas.delete(123);
console.log(chavesVariasdas.has(123));