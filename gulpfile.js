var gulp = require('gulp');
var sass = require('gulp-sass');
var slim = require('gulp-slim');
var gutil = require('gulp-util');

var courses = require('./data/courses.json');


gulp.task('slim', function(){
  gulp.src("./slim/*.slim")
    .pipe(slim({
      pretty: true,
      data: {
        courses: courses
      }
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
  gulp.src('./sass/*.sass')
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('slim/*.slim',['slim']);
  gulp.watch('sass/*.sass',['sass']);
});

gulp.task('default', ['slim','sass','watch']);