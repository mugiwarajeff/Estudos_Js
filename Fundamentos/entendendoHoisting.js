// hoisting é quando uma variavel ao ser declarada é jogada pro topo da intepretação do codigo, dessa forma podemos usar uma 
//variavel antes mesmo que usemos 

var a = 5; 
console.log(a);
var a = 5;


console.log(b);
let b = 4;  // o hoisting não funciona quando declaramos a variavel com let
