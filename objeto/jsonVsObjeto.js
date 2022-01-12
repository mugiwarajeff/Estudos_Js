/**
 * -Json é um formato de texto e significa javascript object notation
 * -json é um formato de dados que é muito utilizado na troca de dados entre sistemas 
 * pelas sua facilidade de formato, sendo muito facil de ser gerado e legivel por diversas linguagens
 * -Json não transporta funções e sim apenas dados, mas podemos ter outros objetos dentro deles, assim como arrays
 * sendo que todos os atributos devem ser delimitados por aspas simples
 * JSON.stringify()
 * JSON.parse()
 */

const obj1 = {
    nome: "jefferson",
    idade: 19,
    sexo: "masculino"
    }

let paraJson = JSON.stringify(obj1)
console.log(paraJson);

let jsonParaObjeto = JSON.parse('{"nome":"jefferson", "idade":19,"sexo":"masculino"}')
console.log(jsonParaObjeto);
