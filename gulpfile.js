'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./",
        ws: true
    });

    gulp.watch("./css/scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/main.js").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./css/scss/*.scss')
  	.pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);