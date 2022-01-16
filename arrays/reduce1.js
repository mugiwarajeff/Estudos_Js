const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "João", nota: 9.8, bolsista: false},
    {nome: "João", nota: 8.7, bolsista: true},
]

const mapeados = alunos.map(aluno => aluno.nota);

const reduzidos = mapeados.reduce((acumulador, atual) => acumulador + atual, 10)

console.log(reduzidos)