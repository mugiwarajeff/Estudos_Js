/**
 * Inicio do modulo que encerra a parte basica de fundamentos da linguagem 
 *
 * Em js array é um objeto e não um tipo de dado em si
 * 
 * arrays são heterogenios apesar de ser uma boa pratica trabalhar de forma homogenea
 * 
 * Indices inexistentes são retornados como undefined
 *
 * 
 * 
 */

const aprovados = ["maluzinha", "jeff", "froes"];

console.log(aprovados);

aprovados.push("qualquer coisa ai");

console.log(aprovados);
console.log(`O array tem ${aprovados.length} indices`);

delete(aprovados[3]); // indice fica como undefined, mas o indice continua contando
console.log(aprovados);
console.log(aprovados.length);

aprovados.splice(3,1, "indice 3", "indice 4");
console.log(aprovados);

