function rand(min, max){
    valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const ateParar = function(){
    padrao = -1

    do {
        padrao = rand(-1, 10);
        console.log(padrao)
    } while (padrao != -1)
}

ateParar()