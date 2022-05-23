const gulp = require("gulp");
const watcher = require("gulp-watch");
const webserver = require("gulp-webserver")

function watcherFiles(callback){
    watcher("src/**/*.html", () => gulp.series("appHTML")())
    watcher("src/**/*.js", () => gulp.series("appJS")())
    watcher("src/**/*.scss", () => gulp.series("appCSS")())
    watcher("src/assets/imgs/*.*", () => gulp.series("appIMG")())
    return callback()
}

function server(callback){
    gulp.src("build")
    .pipe(webserver({
        port: 8080,
        open: true,
        livereload: true
    }))

    return callback()
}

module.exports = {
    watcherFiles, 
    server
}