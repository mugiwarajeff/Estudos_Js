//são funções que servem para fazer parecer com que uma função assincrona, pareça ser mais sincrona
//elas principalmente devem ser utilizadas com funções promisse
//O decorador assync para uma função, permite que a palavra await seja utilizada também

const http = require("http");

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = "";

            res.on("data", dados => {
                resultado += dados;
            })

            res.on("end", () => {
                try {
                    resolve(JSON.parse(resultado))
                }catch(e) {
                    reject(e)
                }
            }) 
        })
    })
}

//função assync 
const obterAlunos = async () => {
    const ta = await getTurma("A");
    const tb = await getTurma("B");
    const tc = await getTurma("C");
    return [].concat(ta,tb,tc)
}

obterAlunos().then(aluno => aluno.map(aluno => aluno.nome))
.then(valorImprimir => console.log(valorImprimir));