function nomeDoMes(numeroMes){
    switch(numeroMes){
        case 1:
            return "janeiro"
        case 2: 
            return "fevereiro"
        case 3: 
            return "março"
        case 4: 
            return "abril"
        case 5: 
            return "maio"
        case 6: 
            return "Junho"
        case 7: 
            return "Julho"
        case 8: 
            return "Agosto"
        case 9: 
            return "setembro"
        case 10: 
            return "Outubro"
        case 11: 
            return "Novembro"
        case 12: 
            return "Dezembro"
        default:
            return "Valor invalido!!"
    }
}

console.log(nomeDoMes(5));
console.log(nomeDoMes(6));
console.log(nomeDoMes(7));
console.log(nomeDoMes(8));
console.log(nomeDoMes(9));
console.log(nomeDoMes(10));
console.log(nomeDoMes(11));
console.log(nomeDoMes(12));
console.log(nomeDoMes(13));