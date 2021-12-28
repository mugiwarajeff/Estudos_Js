function calcule(n1, n2, operador){
    switch (operador){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2
        default:
            return "operação invalida!!"
    }
}

console.log(calcule(4, 2, "+"));
console.log(calcule(4, 2, "-"));
console.log(calcule(4, 2, "*"));
console.log(calcule(4, 2, "/"));
