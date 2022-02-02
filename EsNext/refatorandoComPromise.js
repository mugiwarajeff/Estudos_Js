//refaturando o exemplo das callbacks aninhadas com promise 

const http = require("http");

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            resultado = "";

            res.on("data", dados => { //vai adicionando ao resultado a medida que os dados vão chegando 
                resultado += dados;
            })

            res.on("end", () => {
                try {
                    resolve(JSON.parse(resultado));
                }catch(e) {
                    reject(e);
                }
            })
        })
    })
}

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(valorFinal => console.log(valorFinal));