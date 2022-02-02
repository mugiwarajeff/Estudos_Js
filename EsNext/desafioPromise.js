// usando promisse para ler arquivo txt
const fs = require("fs");

function lerArquivoTeste(caminho){
    console.log(caminho);
    return new Promise((resolve, reject) => {
        const leitura = fs.readFile(caminho, "utf-8", (err, data) => {
            if (err){
                reject(err);
            }else{
            resolve(data);
            }
        })
    })
}

lerArquivoTeste("./EsNext/arquivoDesafio.txt").then(testesGrandes => testesGrandes.toUpperCase())
.then(mostrar => console.log(mostrar));