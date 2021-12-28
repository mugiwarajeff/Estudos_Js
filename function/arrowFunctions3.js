function compararaComThis(param){
    console.log(this === param);
}

obj = {}
compararaComThis = compararaComThis.bind(obj);
compararaComThis(obj);

comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow = comparaComThisArrow.bind(obj)

comparaComThisArrow(module.exports);
