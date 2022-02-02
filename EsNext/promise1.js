//fixando assuntos de promise

//-Está associado a execução de algo no futuro

let p = new Promise((resolve, reject) => {
    resolve(["ana", "bia", "carlos", "duda"])
})

const primeiroValor = arrayString => arrayString[0]
const tudoLower = string => string.toLowerCase()

p.then(valor => primeiroValor(valor))
.then(outroValor => primeiroValor(outroValor))
.then(letra => tudoLower(letra))
.then(valorFinal => console.log(valorFinal))