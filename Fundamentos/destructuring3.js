function rand({max = 1000, min = 0}) {
    let valor = Math.random() * (max-min) + min;
    return Math.floor(valor)
}

//const obj = {max: 50, min: 30};

console.log(rand({max: 500, min:300}));


