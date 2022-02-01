const express = require("express");
const bancoDeDados = require("./bancoDeDados")
const bodyParser = require("body-parser")
const porta = 3000;

app = express();

app.use(bodyParser.urlencoded({ extended: true}))

app.post("/produtos", (req, res, next) => {
    const produto = bancoDeDados.adiocionarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get("/produto/:id", (req, res, next) => {
    const resposta = bancoDeDados.getProduto(req.params.id)
    res.send(resposta)
})

app.put("/produto/:id", (req, res, next) => {
    const produto = bancoDeDados.adiocionarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete("/produto/:id", (req, res, next) => {
    const produto = bancoDeDados.rmProduto(req.params.id)
    res.send(produto);
})

app.listen(porta, () => { // serve para direcionar a porta 
    console.log(`Ouvindo na porta ${porta}`)
})