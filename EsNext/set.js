// é uma outra estrutura de dados, mas que não é indexada e não aceita elementos repetidos

const times = new Set()

times.add("vasco");
times.add("santos").add("flamengo").add("cruzeiro");
times.add("vasco"); //add - metodo do set para adicionar valores

console.log(times);
console.log(times.size); //quantidade de elementos no set
console.log(times.has("vasco")) //verifica se tem determinado elementos

//notação literal de set 
const nomes = new Set(["sheila", "adailton", "jefferson", "adailton"]); //não permite repetição
console.log(nomes);