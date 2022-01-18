// diferença entre dois conceitos

// declarativo, seria voltado para funções e apresetando uma maior reutilização do codigo

// a imperativa seia mais voltada pro passo a passo de um script o que pode não ser interessante
// pois dificulta a leitura e deixando o codigo muito denso ao longo do tempo

const alunos = [
    {nome: "joão", nota:7.9},
    {nome: "Maria", nota: 9.2}
]

// imperativo 

let total = 0;
for (let i = 0; i < alunos.length; i++){
    total += alunos[i].nota;
}
console.log(total/alunos.length);


// declarativa
const getNota = aluno => aluno.nota;
const getTotalNota = (acumulador, atual) => acumulador + atual;

console.log(alunos.map(getNota).reduce(getTotalNota) / 2);
