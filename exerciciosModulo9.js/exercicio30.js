const getValores = (acumulador, atual) => acumulador + atual
const getValue = valor => valor[1];
function receberMelhorEstudante(objeto){
    obj = {}
    somados = Object.values(objeto).map(valor => valor.reduce(getValores)); 
    parDeChaves = Object.keys(objeto);
    medias = somados.map(valor => valor/4)

    for (let i = 0; i < parDeChaves.length; i++){
        obj[parDeChaves[i]] = medias[i];
    }

    const parChaveValorMedia = Object.entries(obj)
    const parChaveValorMediaOrdenado = parChaveValorMedia.sort((a, b) => b[1] - a[1]);

    const objRetorno = {}
    objRetorno[parChaveValorMediaOrdenado[0][0]] = parChaveValorMediaOrdenado[0][1]
    return objRetorno
}


objeto = {
    joao: [8, 7.6, 8.9, 6],
    mariana: [9, 6.6, 7.9, 8],
    carla: [7,7,8,9]
}

console.log(receberMelhorEstudante(objeto));