// try, catch, throw
function corrigeErro(erro){
    pass
}

function falaGritando(name){
    try {
    valor = nome.toUpperCase() + " " + "!!!"
    console.log(valor)
    } catch(e){
        console.log(`aconteceu um erro de ${e}`)
    } finally{
        console.log('como tratar um erro!')
    }
}

falaGritando("olá mundo")