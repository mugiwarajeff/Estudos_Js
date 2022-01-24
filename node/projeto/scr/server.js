const express = require("express");

const porta = 3000;

const app = express();

app.get("/produtos", (req, res, next) => {
    //res.send({produto: "notebook", preco: 2000})
    console.log("teste2")
    next()
})

app.get("/produtos", (req, res, next) => {
    res.send({teste: "aqui foi usado pelo next"})
})

app.listen(porta, () => {
    console.log(`O servidor está sendo executado na porta ${porta}`);
})
