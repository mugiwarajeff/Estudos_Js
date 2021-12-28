console.log(typeof Object);
console.log(typeof new Object); //new é a palavra para podermos instanciar uma função como se fosse um objeto


function falaOi(msg)
{
    return msg;
}

console.log(typeof falaOi);
console.log(typeof new falaOi);

class Pessoa{

}

console.log(typeof Pessoa);
console.log(typeof new Pessoa);


/**
 * entender o operador new e a diferneça de função pra objeto
 */