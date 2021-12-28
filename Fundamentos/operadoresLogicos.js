// operadores logicos são aqueles relacionados a tabela verdade, and, or, xor e not

function irAsCompras(trabalho1, trabalho2) { 
    let tv50 = (trabalho1 && trabalho1);
    const comprarSorvete = trabalho1 || trabalho2;
    const tv32 = !!(trabalho1 ^ trabalho2)
    const saudavel = !comprarSorvete
    
    return {tv50, tv32, comprarSorvete, saudavel}
}

console.log(irAsCompras(true, false))
