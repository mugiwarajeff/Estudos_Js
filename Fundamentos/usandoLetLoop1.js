// diferente do exercicio anterior, o funcionamento com let fica diferente por conta do escopo de bloco dela 

for (let i = 0; i < 10; i++) { 
    console.log(i);
};

console.log(i); // terá um erro gerado, por conta de essa variavel não ter sido declarada no escopo chamado
