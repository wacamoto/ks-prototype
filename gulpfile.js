var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var data = require('gulp-data');
// var slim = require('gulp-slim');
var gutil = require('gulp-util');
var minify = require('gulp-minify');



var jsonData = require('./data/data.json');


gulp.task('scripts', function() {
    gulp.src('script/index.js')
        .pipe(minify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('jade', function () {
  gulp.src('./jade/*.jade')
    .pipe(data(function() {
        return jsonData
    }))
    .pipe(jade())
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function() {
  gulp.src('./sass/*.sass')
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  gulp.watch('script/*.js',['script']);
  gulp.watch(['jade/*.jade','jade/**/*.jade'],['jade']);
  gulp.watch('sass/*.sass',['sass']);
});

gulp.task('default', ['scripts','jade','sass','watch']);