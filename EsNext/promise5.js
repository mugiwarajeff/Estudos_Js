// utilização de blocos try e catch para tratar erros no promise

function funcionarOuNao(valor, chanceDeErro){
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceDeErro){
                reject("ocorreu erro");
            }else{
                resolve(valor);
            }
        }catch(e){
            resolve(e)
        }
    })
}

funcionarOuNao("repassando", 0.5).then(valor => console.log(valor))
.catch(err => console.log(`deu erro: ${err}`));
