const moduloA = require("../../../sistemaDeModulos/moduloA.js");
const saudacao = require("saudacao");
const http = require("http");
const moduloC = require("../../pastaC");
console.log(moduloA);
console.log(saudacao.saudacao);

http.createServer((req, res) => {
    res.write("olá mundo");
    res.end()
}).listen(8080)


console.log(moduloC.teste);