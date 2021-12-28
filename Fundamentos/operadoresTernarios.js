//operadores que atual com 3 operadores 
//usado principalmente em funções, arrow ou normal 

// const aprovacao = nota => nota >= 6 ? 'aprovado':'reprovado'
function aprovacao(nota){
    return nota >= 6 ? 'aprovado':'reprovado';
}
console.log(aprovacao(6));
console.log(aprovacao(5));
