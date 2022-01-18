function areaTriangulo(base, altura){
    const areaTriangulo = (base * altura) / 2;
    return `A area do triangulo é ${areaTriangulo.toFixed(2)} m2`
}

console.log(areaTriangulo(10,15));