module.exports = (...nomes) => {
    const saudacoes = nomes.map(valor => `olá, eu sou o ${valor}`)
    return saudacoes
}