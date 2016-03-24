var gulp = require('gulp');
var argv = require('yargs').argv;
var git = require('gulp-git');

gulp.task('init', function() {
  console.log(argv.m);
});

gulp.task('add', function() {
  console.log('adding...');
  return gulp.src('.')
    .pipe(git.add());
});

gulp.task('commit', function() {
  console.log('commiting');
  if (argv.m) {
    return gulp.src('.')
      .pipe(git.commit(argv.m));
  }
});

gulp.task('gitsend', ['add', 'commit'], function() {
  console.log('adding, commiting and pushing to git...');
});
