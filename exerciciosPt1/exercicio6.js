function sobJurosSimples(capitalInicial, taxaJuros, tempoAplicação){ // dado em meses
    let montante = capitalInicial * (1 + (taxaJuros/100) * tempoAplicação)
    return `R$${montante}`
}

function sobJurosCompostos(capitalInicial, taxaJuros, tempoAplicação){ // dado em meses
    let montante = capitalInicial * (( 1 + (taxaJuros / 100)) ** tempoAplicação)
    return `R$${Math.floor(montante)}`
}

console.log(sobJurosSimples(1000, 2, 10)); 
console.log(sobJurosCompostos(1000, 2, 10)); 
