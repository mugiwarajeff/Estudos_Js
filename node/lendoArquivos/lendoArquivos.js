const fs = require("fs");

//podemos ler de forma sincrona ou assincrona
const caminho = __dirname + "/leitura.json"


//sincrona, que é menos recomendavel por ter arquivos grandes que impeçam o event loop de funcionar otimizadamente
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo)

//Assincrona, opção mais interessante pela função callback

fs.readFile(caminho, "utf-8", (err, conteudo) => {
    if (err == null){
    const config = JSON.parse(conteudo);
    console.log(config.db.host, config.db.port);
    }else{
        console.log("algum erro foi gerado:" + err)
    }
})

// também podemos carregar arquivos json a partir de um require

const ConteudoJson = require("./leitura.json")
console.log(ConteudoJson.db.user) // saira primeiros do que os arquivos gerados de forma assincrona pois eles não ficam carregando no event loop


//lendo pastas também

fs.readdir(__dirname, (err, conteudo) => {
    console.log(conteudo);
})