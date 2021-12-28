// usado principalmente quando não sabemos o fim de um laço


function rand(min, max){
    valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

function ateParar(){
    padrao = 0

    while (padrao != -1){
        padrao = rand(-1, 10);
        console.log(padrao);
    }
}

ateParar()
