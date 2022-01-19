const getValores = valor => valor.key
function receberMelhorEstudante(objeto){
    const paresChavesValores = Object.entries(objeto);

    const parValor = paresChavesValores.map(getValores);
    console.log(parValor);
    console.log(objeto)
    console.log(paresChavesValores.reduce((acumulador, total) => acumulador + total));

    
}


objeto = {
    joao: [8, 7.6, 8.9, 6],
    mariana: [9, 6.6, 7.9, 8],
    carla: [7,7,8,9]
}

receberMelhorEstudante(objeto);