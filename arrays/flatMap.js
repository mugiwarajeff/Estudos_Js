const escola = [
    {
        nome: "M1", 
        alunos: [
            {
                nome: "gustavo",
                nota: 8.1
            },
            {
                nome: "Ana",
                nota: 9.3
            }
        ]},

    {
        nome: "Turma M2",
        alunos: [
            {
                nome: "rebeca",
                nota: 8.9, 
            },
            {
                nome: "Roberto",
                nota: 7.3
            }
        ]
    }
]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
const notas1 = escola.map(getNotasDaTurma);
console.log(notas2);
console.log(escola[0]);