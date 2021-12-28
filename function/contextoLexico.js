// contexto lexico está relacionado com o contexto onde as coisas são escritas

const x = "global";

function mostra(){
    console.log(x);
}

function mostra2(){
    const x = "outra coisa ";
    mostra();
}

mostra2();
