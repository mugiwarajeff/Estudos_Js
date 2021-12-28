// duas formas de marcar os paramentros como padrãos, um mais antigo e outro mais atual

function mostra(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    console.log(a, b)
}

function mostra2(a=0, b=0, c=0){
    console.log(a, b, c);
}
mostra("sei lá", 5)