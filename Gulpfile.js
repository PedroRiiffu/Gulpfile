const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

//SASS > CSS
function compilarSass() {
    return gulp.src('src/scss/**/*.scss') 
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css')); 
}

//imagens
function comprimirImagens() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images')); 
}

//js
function comprimirJs() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')); 
}


exports.sass = compilarSass;
exports.imagens = comprimirImagens;
exports.js = comprimirJs;