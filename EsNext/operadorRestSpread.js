//podemos usar para agrupar valores, rest
//ou para separar valores com spread

//sendo que tudo depende do contexto

const funcionario = {
    nome: "maria", 
    salario: 20000
}

const clone = {ativo: true, ...funcionario} // vai receber todos os atributos de funcionario

console.log(clone);

const grupoA = ["joao", "maria", "jose"];

const alunos = ["jefferson", ...grupoA, "maluzinha"];
console.log(alunos);
