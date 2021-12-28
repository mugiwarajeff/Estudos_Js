let fabricantes = ["chevrolet" , "ford", "mercedes"]

function mostraFabricante(fabricante, indice){
    console.log(`o indice: ${indice}, possui a fabricante ${fabricante}`);
}

fabricantes.forEach(mostraFabricante)