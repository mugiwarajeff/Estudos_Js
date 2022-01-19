const checarVogal = (valor) => valor=="a" || valor=="e" || valor=="i" || valor=="o" || valor=="u" 

function apagaVocais(string){
    arrayDaString = string.split("");
    return arrayDaString.filter(valor => !checarVogal(valor)).join("")
}

function apagaVogais(string){
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u","U"];

    vogais.forEach(valor => string = string.replace(valor, ""));
    return string
}


console.log(apagaVogais("fundamentos"));