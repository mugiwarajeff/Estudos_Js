const axios = require("axios");

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const chineses = f => f.pais === "China"
const mulheres = f => f.genero === "F";
const menorSalario = (funcionario, funcionarioAtual) => { 
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionario = response.data;
    let resposta = funcionario.filter(chineses).filter(mulheres).reduce(menorSalario);
    console.log(resposta)
})
