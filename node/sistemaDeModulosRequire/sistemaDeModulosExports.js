/**
 * 
 * tanto exports quanto o this apontam para o mesmo lugar que modulo.exports mas podem ser alterados sem alterar o module.exports
 */

console.log(module.exports === this);
console.log(exports === this);

exports = null

console.log(module.exports === exports);