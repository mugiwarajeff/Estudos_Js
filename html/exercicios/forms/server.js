const express = require("express");
const bodyParser = require("body-parser");
const porta = 3003;
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.post("/usuarios", (req, res, next) =>{
    console.log(req.body);
    res.send("<h1>PARABENS USUARIO INCLUIDO</h1>")
})

app.get("/usuarios/:id", (req, res, next) =>{
    console.log(req.body);
    console.log(req.params.id);
    res.send("<h1>PARABENS USUARIO OBTIDO</h1>")
}) 

app.listen(porta, () => {
    console.log(`ouvindo na porta ${porta}`)
})