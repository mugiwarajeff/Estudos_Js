const express = require("express");
const bancoDeDados = require("./bancoDeDados");

const porta = 3000

const app = express()

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos)
})

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post("/produtos", (req, res, next) => {
    res.send(bancoDeDados.adicionaProduto({
        nome: req.body.nome,
        preco: req.body.preco
    }))
})

app.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
})