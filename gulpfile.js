// http://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp
// http://www.smashingmagazine.com/2014/06/11/building-with-gulp/

var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    cssmin  = require('gulp-cssmin'),
    rename  = require('gulp-rename'),
    watch   = require('gulp-watch'),
    git     = require('gulp-git'),
    bump    = require('gulp-bump'),
    //filter  = require('gulp-filter'),
    tag_version = require('gulp-tag-version');

/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */

function inc(importance) {
    // get all the files to bump version in
    return gulp.src([/*'./package.json',*/ './bower.json'])
        // bump the version number in those files
        .pipe(bump({type: importance}))
        // save it back to filesystem
        .pipe(gulp.dest('./'))
        // commit the changed version number
        .pipe(git.commit('New package version'))

        // read only one file to get the version number
        //.pipe(filter('package.json'))
        // **tag it in the repository**
        .pipe(tag_version());
}

gulp.task('patch', function() { return inc('patch'); })
gulp.task('feature', function() { return inc('minor'); })
gulp.task('release', function() { return inc('major'); })


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
