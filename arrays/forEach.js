// função que serve para iterar sobre um array, sendo que o mesmo
// sempre recebe uma função callback, para atuar sobre o valor iterado

const alunos = ["maluzinha", "jefferson", "caiozina"];

alunos.forEach((nome,indice) => console.log(`${indice + 1}) ${nome}`));

alunos.push("froes");

const mostraAlunos = (n, i) => console.log(`${i + 1}) ${n}`)
console.log("separaaaaaaaaaa");

alunos.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`);
})

alunos.forEach(mostraAlunos);