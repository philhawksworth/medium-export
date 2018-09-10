const gulp      = require("gulp");
const postcss   = require("gulp-postcss");
const precss    = require('precss');
const cssnano   = require('cssnano');



/*
  generate the css with post css
*/
gulp.task('css', function () {
  return gulp.src('css/**/*.css')
    .pipe(postcss([precss, cssnano] ))
    .pipe(gulp.dest('site/_includes/css'));
});



/*
  Watch folders for changess
*/
gulp.task("watch", function() {
  gulp.watch('css/**/*.css', gulp.parallel('css'));
});


/*
  Let's build this sucker.
*/
gulp.task('build', gulp.series(
  'css'
));
