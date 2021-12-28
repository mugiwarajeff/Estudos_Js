function distribuiCedulas(reais){
    let cem=0, cinquenta=0, dez=0, cinco=0, um=0;

    while (reais > 0){
        if (reais >= 100){
            reais -= 100;
            cem += 1;
        }else if (reais >= 50){
            reais -= 50;
            cinquenta += 1;
        }else if (reais >= 10){
            reais -= 10;
            dez += 1
        }else if(reais >= 5){
            reais -= 5;
            cinco += 1;
        }else if(reais >= 1){
            reais -= 1;
            um += 1;
        }
    }
    return [cem, cinquenta, dez, cinco, um];
}

function mostraCedulas(listaValores){
    let fraseFinal = "";
    listaDeNomesValores = ["R$100", "R$ 50", "R$10", "R$5", "R$1"];
    for (c in listaValores){
        if (listaValores[c] == 0){
            fraseFinal += ""
        }else{
            fraseFinal += `${listaValores[c]} nota(s) de ${listaDeNomesValores[c]}. `
        }
    }
    return fraseFinal
}

console.log(mostraCedulas(distribuiCedulas(18)))

