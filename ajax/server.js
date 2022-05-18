const bodyParser = require("body-parser");
const express = require("express");
const multer = require("multer");
const door = 8080;

const app = express();
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, "./upload")
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now}_${file.originalname}`);
    }
})

const upload = multer({storage: storage}).single("file");

app.use(express.static("."));
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.get("/teste", (req, res) => {
    res.send("Okay!");
})

app.post("/upload", (req, res) => {
    upload(req, res, err => {
        if (err){
            return res.send("ocorreu um erro!");
        }
        res.send("Carregamento concluido!")
    })
})

app.post("/formulario", (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get("/parOuImpar", (req, res) => {
    console.log(req.query.numero)
    const par = parseInt(req.query.numero) % 2 === 0;
    console.log(par)
    res.send({
        resultado: par ? "Par" : "Impar"
    })
})

app.listen(door, () => {
    console.log("rodando...")
});