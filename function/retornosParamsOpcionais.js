function area(altura, largura){
    let area = altura * largura;
    if (area > 20)
    {
        console.log("valor acima do permitido");
    }else
    {
        return area;
    }

}


console.log(area(2,3));
