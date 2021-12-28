//melhor para quando temos varias opções

Number.prototype.entre = function(start, end){
    return this >= start && this <= end
}

const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log("melhores notas")
            break
        case 8: case 7: case 6:
            console.log("notas medianas")
            break
        case 5: case 4: case 3:
            console.log("recuperação")
            break
        case 2: case 1: case 0:
            console.log("perdeu de vez!!")
            break
        default:
            console.log("nota invalida!!")
    }
}

imprimirResultado(10);
imprimirResultado(9);
imprimirResultado(8);
imprimirResultado(7);
imprimirResultado(6);
imprimirResultado(5);
imprimirResultado(4);
imprimirResultado(3);
imprimirResultado(2);
imprimirResultado(1);
imprimirResultado("bla bla bla")