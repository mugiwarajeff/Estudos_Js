// closure significa fechamento, e basicamente é o escopo de uma função no seu momento de declaração 


const x = "global";

function fora(){
    const x = "outra coias";   // o valor que será usado dentro da função dentro devido ao seu contexto, é o x com escopo mais proximo ao da função
    function dentro(){
        console.log(x);
    }
    return dentro()
}

const minhaFuncao = fora();
