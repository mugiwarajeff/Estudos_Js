function soma(){
    let numero = 0;
    for (num in arguments){
        numero += arguments[num] // arguments é um array que recebe todos os argumentos passados na função
    }
    console.log(numero);
}

function soma2(a, b){
    let numero = 0;
    for (index in arguments){
        numero += arguments[index]
    }
    console.log(numero)

}
soma2(2, 5, 7, 8, 10);


