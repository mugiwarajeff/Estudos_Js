function unirVetores(vetorInt, vetorString, vetorDouble){
    vetorIntString = vetorInt.concat(vetorString);  
    vetorRetorno = vetorIntString.concat(vetorDouble);

    return vetorRetorno;
}

console.log(unirVetores([1,2,3,4], ["um", "dois", "tres", "quatro"], [1.5, 2.5, 3.5, 4.5]));