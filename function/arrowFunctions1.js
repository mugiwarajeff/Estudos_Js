// As arrow functionas apresentam sintaxe reduzida 
// apresentão seu this fixado
// sempre é uma função anonima 
// pode ser sem chaves (com retorno implicito)

const soma = (a, b) => {
    return a + b;
}

const soma2 = (a, b) => a + b;

console.log(soma2(5, 7));
