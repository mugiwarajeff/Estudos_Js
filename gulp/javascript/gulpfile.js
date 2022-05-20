const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");

const { series, parallel } = require("gulp")

function transformaraJs(callback){
    gulp.src("src/**/*.js")
    .pipe(babel({
        comments: false,
        presets: ["env"]
    }))
    .pipe(uglify())
    .on("error", error => console.log(error)
    )
    .pipe(concat("codigo.min.js"))
    .pipe(gulp.dest("build/js"))

    return callback()
}

module.exports.default = transformaraJs