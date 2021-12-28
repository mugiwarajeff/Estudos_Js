function comparaAltura(altura1, crescimento1, altura2, crescimento2){
    let criança1 = [altura1, crescimento1];
    let criança2 = [altura2, crescimento2];

    let criancaMenor;
    let contadorAnos = 0;

    if (criança1[0] > criança2[0]){
        criancaMenor = criança2;
        if (criança2[1] <= criança1[1]){
            return `A criança 2 é menor e nunca passará a criança 1`
        }else{
            while (criança2[0] < criança1[0]){
                criança1[0] += criança1[1];
                criança2[0] += criança2[1];
                contadorAnos++;

                
            }
            return `A criança 2 é menor e ultrapassará a criança 1 em ${contadorAnos} anos`;
        }
        
    }else if (criança1[0] < criança2[0]){
        criancaMenor = criança1
        if (criança1[1] <= criança2[1]){
            return "A criança 1 é menor e nunca passará a criança 2 em altura."
        }else{
            while (criança1[0] < criança2[0]){
                criança1[0] += criança1[1];
                criança2[0] += criança2[1];
                contadorAnos++;
            }
            return `A criança 1 é menor e ultrapassará a criança 2 em ${contadorAnos} anos`;
        }
    }else{
        return "Elas tem a mesma altura"
    }

}


console.log(comparaAltura(150, 3, 150, 3));