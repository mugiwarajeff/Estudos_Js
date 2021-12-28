function classificaTriangulo(ladoA, ladoB, ladoC){
    if(ladoA === ladoB && ladoB === ladoC){
        console.log("EQUILATERO!");
    }else if(ladoA !== ladoB && ladoB !== ladoC){
        console.log("ESCALENO!");
    }else {
            console.log("ISOCELES!")
    }
}

classificaTriangulo(3, 2, 1);



