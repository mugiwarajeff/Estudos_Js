const gulp = require("gulp");
const { series } = require("gulp");

function copiar(callback){
    console.log("copiando arquivo!!");
    return callback();
}

module.exports.default = series(copiar);
