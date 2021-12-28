function imparesEntre(inicio=0, fim=100){
    let impares = [];
    if (inicio > fim){
        [inicio, fim] = [fim, inicio];
    }

    for (c = inicio; c < fim; c++){
        if (c % 2 !== 0){
            impares.push(c);
        }
    }
    return `Os números impares são: [${impares}]`;
}

console.log(imparesEntre(70, 50));
