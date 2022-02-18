const express = require("express");
const bodyParser = require("body-parser");

const porta = 3003;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post("/usuarios", (req, res, next) => {
    console.log(req.body)
    res.send("<h1>Parabens a pagina foi incluida</h1>")
})

app.post("/usuarios/:id", (req, res, next) => {
    console.log(req.body);
    console.log(req.params.id);
    res.send("<h1>Parabens a pagina foi alterada</h1>")
})
app.listen(porta, () => {
    console.log(`Ouvindo na porta ${porta}`)
});
