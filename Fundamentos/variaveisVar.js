var a = 4

{
    {
        {
            a = 6
            console.log(a); // para Var temos apenas escopo, global e de função, não se aplicando a blocos
        }
    }
}

console.log(a); 


var imprimir = function(a) {

    c = a
    console.log(c);
}
console.log(c) // não funciona por conta do escopo de c ser funcional

