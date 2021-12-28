function bhaskara(a, b, c){
    delta = b**2 - 4 * a * c

    if (delta < 0 ){
        return "delta é negativo"
    }else if (delta === 0){
        return -b / 2 * a
    }else if (delta > 0){
        x1 = (-b + Math.sqrt(delta)) / 2 * a;
        x2 = (-b - Math.sqrt(delta)) / 2 * a;
        return [x1, x2]
    }
}

console.log(bhaskara(3, 5, 2));


