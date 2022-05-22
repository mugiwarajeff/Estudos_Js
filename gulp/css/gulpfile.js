const { series, parallel} = require("gulp");
const gulp = require("gulp");

const sass = require('gulp-sass')(require('sass'));
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function transformaSASS(callback){
    gulp.src("src/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({
        "uglycomments": true
    }))
    .pipe(concat("estilo.min.css"))
    .pipe(gulp.dest("build/css"))

    return callback()
}

function copiarHTML(callback){
    gulp.src('src/index.html')
    .pipe(gulp.dest("build"))
    .on("error", err => console.log("Ocorreu um error: " + err))

    return callback()
}

module.exports.default = parallel(transformaSASS, copiarHTML)