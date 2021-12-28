function verificaCaractere(string1, string2){
    separadas1 = string1.split("");
    separadas2 = string2.split("");
    separadas1.sort();
    separadas2.sort();
    separadas1Filtradas = separadas1.filter((ele, pos)=> separadas1.indexOf(ele)==pos);
    separadas2Filtradas = separadas2.filter((ele, pos)=> separadas2.indexOf(ele)==pos);

    let parametroCerto = separadas1Filtradas.length;
    let contTrue = 0 

    for (c in separadas1Filtradas){
       if (separadas1Filtradas[c] === separadas2Filtradas[c]){
           contTrue++;
       }
    }
    
    if (contTrue == parametroCerto){
        return true;
    }else{
        return false
    }
}

console.log(verificaCaractere("cantiga", "caaatinga"))
