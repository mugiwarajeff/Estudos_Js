function trocaVetores(vetor1, vetor2){
    if (vetor1.length == vetor2.length){
        [vetor1, vetor2] = [vetor2, vetor1];
        return `vetor1: ${vetor1} --- vetor2: ${vetor2}`;
    }else{
        return "Vetores de Tamanhos diferentes";
    }
}

console.log(trocaVetores([1,2,3,4], [4,3,2,1]));

