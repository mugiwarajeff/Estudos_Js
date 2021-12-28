function fazerDivisao(dividendo, divisor){
    resultado = dividendo / divisor;
    resto = dividendo % divisor;
    
    console.log(`resultado: ${Math.floor(resultado)};
resto: ${resto}`);
}

fazerDivisao(5,2)