const bodyParser = require("body-parser");
const express = require("express");
const door = 8080;

const app = express();

app.use(express.static("."));
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.get("/teste", (req, res) => {
    res.send("Okay!");
})

app.listen(door, () => {
    console.log("rodando...")
});