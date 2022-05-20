const gulp = require("gulp");
const { series, parallel } = require("gulp");

function passo1(callback){
    console.log("Fazendo o passo1...");
    return callback();
}

function passo2(callback){
    console.log("fazendo o passo2");
    return callback();
}

function copiar(callback){
    gulp.src("pastaA/**/*txt")
    .pipe(gulp.dest("pastaB"))

    return callback();
}

module.exports.default = series(passo1, passo2, copiar);
