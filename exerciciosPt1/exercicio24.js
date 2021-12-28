function mostraHW(vezes){
    let contador = 0;
    while (contador < vezes){
        console.log(`${contador + 1}° - Hello Word!`);
        contador += 1;
    }
}

mostraHW(11);