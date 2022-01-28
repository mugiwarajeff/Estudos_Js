//arrow functions e o contexto do this dentro dessas funções que servem principalmente para funções de uma linha 

//parametros default
const soma = (a=1, b=1) => a + b;

const contexto = () => console.log(this === exports);


//Operadores rest
const soma2 = function(...nomes){
    nomes.forEach(valor => console.log(valor));
}
contexto();
console.log(soma());

soma2("nome1", "nome2", "nome3");
