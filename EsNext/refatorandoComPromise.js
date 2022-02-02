//refaturando o exemplo das callbacks aninhadas com promise 

const http = require("http");
//const { get } = require("https");

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        //let resultado = ""; 

        http.get(url, res => {
            let resultado = "";

            res.on("data", dados => {
                resultado += dados;
            })

            res.on("end", () => {
                try{
                    resolve(JSON.parse(resultado));
                }catch(e){
                    console.log("deu merda")
                    reject(e);
                }
            })
        })
    })
}

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
.then(resultados => [].concat(...resultados))
.then(turma => turma.map(aluno => aluno.nome))
.then(mostra => console.log(mostra));

//refazendo para testar
