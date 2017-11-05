var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss');
    replace = require('gulp-replace'),
    fs = require('fs');

//Processa main.css
gulp.task('sass:main', function () {
    sass('assets/scss/main.scss').on('error', sass.logError)
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest('./'));

});


gulp.task('default', function () {
    gulp.watch([
        'assets/scss/*/*.scss',
        'assets/scss/*.scss'
    ], [
        'sass:main'
    ]);
});

