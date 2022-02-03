function gerarNumeroEntre(min, max, tempo=2000){
    if (min > max ) [min, max] = [max, min];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fator = (max - min + 1);
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio)
        }, tempo )
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeroEntre(1, 60),
        gerarNumeroEntre(1, 60),
        gerarNumeroEntre(1, 60),
        gerarNumeroEntre(1, 60),
        gerarNumeroEntre(1, 60),
    ])
}

console.time("promise");

gerarVariosNumeros().then(valor => console.log(valor))
.then(() => {
    console.timeEnd("promise");
})

 