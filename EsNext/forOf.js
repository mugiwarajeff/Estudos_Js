// podemos fazer esse tipo de laço para iterar sobre os valores de uma determinada estrutura de dados
// se aplica a string, arrays, objetos, set, map e etc

let nome = "jefferson";

for (letra of nome){
    console.log(letra);
}

let nomes = ["jefferson", "maluzinha", "amanda"];

for (nome of nomes){
    console.log(nome);
}

const times = new Set(["vasco", "flamengo", "santos"]);

for (time of times){
    console.log(time);
}

const sequenciasDiferentes = new Map();

sequenciasDiferentes.set({}, "objeto");
sequenciasDiferentes.set({}, "objeto2");

for (item of sequenciasDiferentes){
    console.log(item);
}