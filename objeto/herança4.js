//aplicação do atributo __proto__
//todas as os objetos instanciados a partir de uma notação literal ou metodo do Object apontam para o Object.prototype
//já quando criamos a partir de uma função construtora e instanciamos com o operador new, o seu __proto__ apontará para a função.prototype

function MeuObjeto(){

};

const obj = new MeuObjeto;
console.log(MeuObjeto.prototype === obj.__proto__);
//console.log(MeuObjeto.__proto__ === function.prototype); não funcionou