function divivelPorTres(numero){
    if (numero % 3 === 0){
        return `O número: {${numero}} é divisivel por 3`
    }else{ 
        return `O número {${numero}} não é divisivel por 3`
    }
}

console.log(divivelPorTres(10));

