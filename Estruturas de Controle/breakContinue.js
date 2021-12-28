//break e continue são usados para alterar o fluxo de uma estrutura, o break é usado no: for, switch e while já o continue só no for e while
//break terminará o laço mais interno ao comando, já o continue pulará pro proximo ciclo


externo: for (let i = 0; i < 10; i++) {
    for (let b = 0; b < 10; b++){
        if (b == 5){
            break externo
        }
        console.log(b,i);

    }
}