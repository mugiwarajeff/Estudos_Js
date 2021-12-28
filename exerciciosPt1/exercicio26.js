function paresEntre(vl, vf){
    let pares = [];
    for (c=vl; c<=vf; c++){
        if (c % 2 == 0){
        pares.push(c);
    }
}
    return pares
}

console.log(paresEntre(1, 100));