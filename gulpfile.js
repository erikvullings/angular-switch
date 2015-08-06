// http://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp
// http://www.smashingmagazine.com/2014/06/11/building-with-gulp/

var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    cssmin  = require('gulp-cssmin'),
    rename  = require('gulp-rename'),
    watch   = require('gulp-watch');

gulp.task('minifyjs', function () {
   gulp.src('./src/switch.js')
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/'));
});

gulp.task('minifycss', function () {
   gulp.src('./src/switch.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/'));
});

gulp.task('copy_css', function () {
    gulp.src('./src/switch.css')
        .pipe(gulp.dest('example/'))
    gulp.src('./src/switch.css')
        .pipe(gulp.dest('dist/'))
});

gulp.task('copy_js', function () {
    gulp.src('./src/switch.js')
        .pipe(gulp.dest('example/'))
    gulp.src('./src/switch.js')
        .pipe(gulp.dest('dist/'))
});

gulp.task('dist', ['copy_css', 'copy_js', 'minifycss', 'minifyjs']);

gulp.task('watch', function () {
    gulp.watch('./src/*.css', ['copy_css']);
    gulp.watch('./src/*.js',  ['copy_js' ]);
});

gulp.task('default', ['dist', 'watch']);
