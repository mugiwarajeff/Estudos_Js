//Exemplo de promise desta vez sem operação assincrona

function gerarValorEntre(min, max){
    if (max < min){
        [max, min] = [min, max];
    }

    return new Promise((resolve, reject) => {
        const aleatorio = Math.random() * (max - min) + 1 + min
        resolve(aleatorio);
    })
}

gerarValorEntre(10, 30)
.then(resuX10 => resuX10 * 10)
.then(valor => console.log(valor));