function contarCaractere(char, stringFrase){
    const arrayDosCharacteres = stringFrase.split("");
    let contagemChar = 0;

    arrayDosCharacteres.forEach(function(valor){
        if (valor === char){
            contagemChar++;
        }
    })

    return contagemChar;
}

function contarCaractere2(char, stringFrase){
    const arrayResultante = stringFrase.split("");
    return arrayResultante.filter(valor => valor == char).length
}

console.log(contarCaractere2("l", "alo galera de callboy"));