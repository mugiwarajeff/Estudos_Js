function aumentoSalario(pT, sA){ // pt == plano de trabalho, sA = salario Atual
    switch(pT){
        case "A":
            return sA + (sA * (10/100));
        case "B":
            return sA + (sA * (15/100));
        case "C":
            return sA + (sA * (20/100));
        default:
            return "Valor invalido!!";
    }
}


console.log(aumentoSalario("A", 1000));
console.log(aumentoSalario("B", 1000));
console.log(aumentoSalario("C", 1000));
console.log(aumentoSalario("D", 1000));
