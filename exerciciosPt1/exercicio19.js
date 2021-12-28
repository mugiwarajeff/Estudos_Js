function calcularLanche(cod, quant){ //cod == codigo e quant = quantidade
    cardapio = {
        100: ["Cachorro Quente", 3.00],
        200: ["Hamburgues Simples", 4.00],
        300: ["Cheeseburguer",, 5.50],
        400: ["bauru", 7.50],
        500: ["Refrigerante", 3.50],
        600: ["Suco", 2.80]
    }

    switch(cod){
        case 100:
            return `Você comprou ${quant} do produto ${cardapio[100][0]}, valor total a ser pago ${quant * cardapio[100][1]}`;
        case 200:
            return `Você comprou ${quant} do produto ${cardapio[200][0]}, valor total a ser pago ${quant * cardapio[200][1]}`;
        case 300:
            return `Você comprou ${quant} do produto ${cardapio[300][0]}, valor total a ser pago ${quant * cardapio[300][1]}`;
        case 400:
            return `Você comprou ${quant} do produto ${cardapio[400][0]}, valor total a ser pago ${quant * cardapio[400][1]}`;
        case 500:
            return `Você comprou ${quant} do produto ${cardapio[500][0]}, valor total a ser pago ${quant * cardapio[500][1]}`;
        case 600:
            return `Você comprou ${quant} do produto ${cardapio[600][0]}, valor total a ser pago ${quant * cardapio[600][1]}`;
        default:
            return "Codigo do produto inválido";
    }
}

console.log(calcularLanche(100, 3));
console.log(calcularLanche(200, 3));
console.log(calcularLanche(400, 3));
console.log(calcularLanche(700, 3));