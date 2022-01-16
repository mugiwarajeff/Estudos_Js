const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "João", nota: 9.8, bolsista: false},
    {nome: "João", nota: 8.7, bolsista: true},
]

const booleanosAlunos = alunos.map(aluno => aluno.bolsista);
console.log(booleanosAlunos);
// Todos os alunos são bolsistas ?

console.log(`Todos os alunos são bolsistas? ${booleanosAlunos.reduce(function(acumulador, atual){
    return acumulador && atual
})}`)

// Algum aluno é bolsista??

console.log(`Algum aluno é bolsista? ${booleanosAlunos.reduce((acumulador, atual) => acumulador || atual)}`);
