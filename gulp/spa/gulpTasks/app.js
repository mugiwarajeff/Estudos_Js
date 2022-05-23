const gulp = require("gulp");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require("gulp-htmlmin")

function appJS(callback){
    gulp.src("src/assets/**/*.js")
    .pipe(babel({
        presets: ["env"]
    }))
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build/assets/js"))

    return callback()
}

function appCSS(callback){

    gulp.src("src/assets/sass/index.scss")
    .pipe(sass())
    .pipe(uglifycss({
        "uglycomments": true
    }))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("build/assets/css"))

    return callback()
}

function appHTML(callback){
    gulp.src("src/**/*.html")
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest("build"))
    
    return callback()
}

function appIMG(callback){
    gulp.src("src/assets/imgs/*.*")
    .pipe(gulp.dest("build/assets/imgs"))

    return callback()
}

gulp.task("appJS", appJS)
gulp.task("appCSS", appCSS)
gulp.task("appHTML", appHTML)
gulp.task("appIMG", appIMG)


module.exports = { 
    appCSS, 
    appJS, 
    appHTML, 
    appIMG
}