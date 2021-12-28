const pessoa = { saudacao : "bom dia!",
                 falar(){console.log(this.saudacao)},
}

const falar = pessoa.falar
const falarPessoa = pessoa.falar.bind(pessoa) // bind vai fazer a amarração de um objeto em uma variavel funcinal 
falarPessoa();
falar();