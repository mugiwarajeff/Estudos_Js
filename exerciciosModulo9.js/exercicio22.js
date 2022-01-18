function funcaoDaSorte(numero){
    numeroAleatorio = Math.random().toFixed(1) * 10;
    if (numero < 10 && numero > 0){
        if (numero == numeroAleatorio){
            return `Parabéns! o número sorteado foi ${numeroAleatorio}`
        }else{
            return `Que pena! O número sorteado foi o ${numeroAleatorio}`
        }
    }else{ 
        return "esperado numero entre 0 e 10";
    }
}
console.log(funcaoDaSorte(3));