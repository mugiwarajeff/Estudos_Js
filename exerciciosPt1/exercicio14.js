function qualFruta(fruta){
    switch(fruta){
        case "maça":
            return "não vendemos fruta aqui";
        case "kiwi":
            return "Estamos com escassez de kiwis";
        case "melancia":
            return "Aqui está, são 3 reais o quilo";
        default:
            return "opção não valida";
    }
}

console.log(qualFruta("ssss"));


