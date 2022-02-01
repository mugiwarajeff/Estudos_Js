//promisse é um objeto que representa a falha ou o sucesso de uma operação assincrona

//Os dois destinos mais comuns de uma promise é ser atendida ou ser rejeitada 
function falarDepoisDe(frase, segundos){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe("olá mundo", 3).then(frase => frase.concat("!!!")).then(resultado => console.log(resultado));
