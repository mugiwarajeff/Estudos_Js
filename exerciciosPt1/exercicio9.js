function avaliaNota(nota){
    if (nota < 40 && nota >= 0){
        return `O aluno foi reprovado com a nota ${nota}`
    }else if ( nota >= 40 && nota <= 100){
    let valorRetorno = Number(nota);
    let proximoMultiploCinco = Number(nota);

    
    while (proximoMultiploCinco % 5 != 0){
        console.log(proximoMultiploCinco);
        proximoMultiploCinco += 1;
    }
    if (nota - proximoMultiploCinco < 3){
        valorRetorno = proximoMultiploCinco;
    }
        return `O aluno foi aprovado com a nota ${valorRetorno}`

    }else if (nota < 0 || nota > 100){
    
    return `A nota {${nota}} é um valor invalido`
        
    }
}

console.log(avaliaNota(84));