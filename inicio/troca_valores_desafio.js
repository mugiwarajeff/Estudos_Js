var a = 2;
var b = 5;

[a, b] = [b, a]
console.log(a, b)

var c = b;
b = a;
a = c;

console.log(a, b)