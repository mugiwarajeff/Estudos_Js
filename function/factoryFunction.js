// É muito conhecido como um padrão de projeto


function CriarPessoa(){
    return {
        nome: "Jefferson",
        sobrenome: "Cerqueira"
    }
}


funcao1 = CriarPessoa(); //essa instancia é diferente da funcao2, são objetos diferentes
funcao2 = CriarPessoa();

console.log(funcao1);
console.log(funcao2);
console.log(funcao1 === funcao2);
console.log(typeof funcao1);
