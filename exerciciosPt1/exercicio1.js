function retornaCalculos(a=0, b=0){
    let soma = a + b;
    let sub = a - b;
    let mult = a * b;
    let div = a / b;
    console.log(`SOMA: ${soma}, 
SUB: ${sub}, 
MULT: ${mult}, 
DIV: ${div.toFixed(2)}`);
}

retornaCalculos(5, 7);
