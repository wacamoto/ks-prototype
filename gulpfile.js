var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var data = require('gulp-data');
// var slim = require('gulp-slim');
var gutil = require('gulp-util');



var jsonData = require('./data/data.json');


// gulp.task('slim', function(){
//   gulp.src("./slim/*.slim")
//     .pipe(slim({
//       pretty: true,
//       data: {
//         courses: courses
//       }
//     }))
//     .on('error', gutil.log)
//     .pipe(gulp.dest('./'));
// });

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
  // gulp.watch('slim/*.slim',['slim']);
  gulp.watch(['jade/*.jade','jade/**/*.jade'],['jade']);
  gulp.watch('sass/*.sass',['sass']);
});

gulp.task('default', ['jade','sass','watch']);