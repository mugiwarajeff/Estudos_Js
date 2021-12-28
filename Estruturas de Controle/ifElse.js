// Dessa vez vamos utilizar também o else, para quando o if não é verdadeiro 

function aprovacao(nota) {
    if (nota >= 7) {
        console.log("você foi aprovado");
    } else {
        console.log("você não foi aprovado");
    }
}

aprovacao(6);
aprovacao(7);