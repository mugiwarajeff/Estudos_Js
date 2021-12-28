function conceitoNota(vetorNotas){
    for (c in vetorNotas){
        if (vetorNotas[c] >= 0 && vetorNotas[c] < 5){
            console.log(`Nota ${vetorNotas[c]} = D`);
        }else if (vetorNotas[c] < 7){
            console.log(`Nota ${vetorNotas[c]} = C`);
        }else if(vetorNotas[c] < 9){
            console.log(`Nota ${vetorNotas[c]} = B`);
        }else if(vetorNotas[c] <= 10){
            console.log(`Nota ${vetorNotas[c]} = A`);
        }else{
            console.log("valor invalido!!");
        }
    }
}

conceitoNota([2,5,7,8.9, 10, 6.5, 0, 11]);