const axios = require("axios");

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"

axios.get(url).then(response => {
    const funcionario = response.data;
    const apenasFuncionarioMulher = funcionario.filter(valor => valor.genero === "F");
    const FuncionarioMulherChinesa = apenasFuncionarioMulher.filter(valor => valor.pais === "China")
    const funcionarioRetorno = FuncionarioMulherChinesa.sort((a, b) => b.salario - a.salario)

    console.log(funcionarioRetorno[0]);
})

//devemos pegar a mulher chinesa com menor salario
