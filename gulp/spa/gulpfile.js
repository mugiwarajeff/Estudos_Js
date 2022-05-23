const gulp = require("gulp");
const { series, parallel} = require("gulp");

const { appJS, appCSS, appHTML, appIMG} = require("./gulpTasks/app");
const { depsCSS, depsFonts } = require("./gulpTasks/deps");
const { watcherFiles, server } = require("./gulpTasks/server")


module.exports.default = series( parallel( 
    series(appJS, appCSS, appHTML, appIMG),
    series(depsCSS, depsFonts)
    ),
    server,
    watcherFiles
    )