// exemplos de promise com funções callbacks aninhadas

// setTimeout(() => {
//     console.log("executando")
//     setTimeout(() => {
//         console.log("executando 2")
//         setTimeout(()=> {
//             console.log("executando 3")
//         }, 2000)
//     }, 2000)
// }, 2000)

// exemplo com promisse

function executarDepoisDe(milissegundos=2000){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("executando")
            resolve("vishhh")
        }, milissegundos)
    })
}

executarDepoisDe()
.then(valor => executarDepoisDe())
.then(outroValor => executarDepoisDe());