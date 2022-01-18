const apenasNumeros = n => typeof n == "number";

function filtarNumeros(arrayParaFiltrar){
    return arrayParaFiltrar.filter(apenasNumeros);
}

const arrayAleatorio = ["javascript", 1, "3", "web", 20]
console.log(filtarNumeros(arrayAleatorio));
