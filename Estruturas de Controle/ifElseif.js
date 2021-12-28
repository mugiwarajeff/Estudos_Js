// podemos usar isso quando tempos multiplas variações

Number.prototype.entre = function(start, end){
    return this >= start && this <= end 

}

const imprimirResultado = function(nota){
    if (nota.entre(9, 10)){
        console.log("ficou entre os melhores")
    } else if (nota.entre(7, 8.99)){
        console.log("passou direto");
    } else if (nota.entre(5, 6.99)){
        console.log("ficou em recuperação");
    }else {
        console.log("você perdeu!!")
    }
}

imprimirResultado(4);
imprimirResultado(6);
imprimirResultado(7);
imprimirResultado(8);
imprimirResultado(9);
imprimirResultado(10);