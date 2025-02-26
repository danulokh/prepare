const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

// Шлях до SCSS файлів
const scssPath = "assets/scss/**/*.scss";
const cssDest = "assets/css";

// Функція для компіляції SCSS
function styles() {
    return gulp.src(scssPath)
        .pipe(sass().on("error", sass.logError)) // Компіліяція SCSS
        .pipe(autoprefixer({ cascade: false })) // Автопрефікси
        .pipe(cleanCSS()) // Мінімізація
        .pipe(gulp.dest(cssDest));
}

// Відстеження змін у SCSS файлах
function watchFiles() {
    gulp.watch(scssPath, styles);
}

// Команди для запуску
exports.styles = styles;
exports.watch = gulp.series(styles, watchFiles);