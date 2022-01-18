function inverso(numeroOuBooleano){
    let valida = typeof numeroOuBooleano;
    if (valida == "boolean" ){
        return !numeroOuBooleano;
    }else if (valida == "number"){
        return -numeroOuBooleano;
    }else{
        return `Numero ou booleano esperados, mas o parametroi é do tipo ${valida}`;
    }
}


console.log(inverso(17));
console.log(inverso(true));
console.log(inverso(false));
console.log(inverso("asdas"));