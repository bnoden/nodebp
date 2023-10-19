const gulp = require('gulp');
const minify = require('gulp-minify');
const zip = require('gulp-zip');
const del = require('del');
const browserify = require('browserify');
const fs = require('fs');

gulp.task('bundle', () => {
  browserify({
    entries: 'index.js',
    debug: false
  })
    .bundle()
    .pipe(fs.createWriteStream('bundle.js'));
});