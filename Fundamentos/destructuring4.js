function rand([max=1000, min=0]) {
    if (min > max) [max, min] = [min, max];
    let valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

arra = [100, 50];

console.log(rand(arra));

