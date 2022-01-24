const fs = require("fs");

pessoa1 = {
    nome: "joaozin",
    idade: 19,
    sexo: "masculino"
}
fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(pessoa1), err => {
    console.log(err || "produto salvo com sucesso!");
} )