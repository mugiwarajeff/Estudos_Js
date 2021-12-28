function PA(a1, n, r){
    let termos = [];
    let cont = 0, soma = 0;
    for (c = a1; cont < n ; c += r){
        termos.push(c);
        soma += c;
        cont++
    }
    return `Os termos da PA de a1 = ${a1}, r = ${r} até o n = ${n}, são: [${termos}], sendo que a soma é ${soma}`;
}

function PG(a1, n, r){
    let termos = [];
    let cont = 0, soma=0;
    for (c = a1; cont < n; c *= r){
        termos.push(c);
        soma += c;
        cont++;
    }
    return `Os termos da PG de a1 = ${a1}, r = ${r} até o n = ${n}, são: [${termos}], sendo que a soma é: ${soma}`;
}


console.log(PA(1, 11, 2));
console.log(PG(5, 10, 3));


