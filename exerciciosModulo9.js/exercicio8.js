function multiplica(n1, n2){
    let acumulador = 0;
    if (n1 >= 0 && n2 >= 0){
        for (let cont = 0; cont < n2; cont++){
            acumulador += n1;
        }
        return acumulador;
    }else{
        return "Valores maiores que 0 são esperados";
    }
}

console.log(multiplica(5, 5));