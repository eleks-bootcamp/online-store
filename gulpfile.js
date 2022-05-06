const gulp = require('gulp');
// const { parallel } = require('gulp');

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const replace = require('gulp-replace');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');

gulp.task('uglify-css', done => {
  gulp.src('src/**/01-css-task/solution/style.css')
    .pipe(concatCss("style.min.css"))
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(gulp.dest('src/styles'));

  done();
})

gulp.task('copy-html', done => {
  gulp.src('src/**/02-js-task/index.html')
    .pipe(replace('./solution/index.js', './index.js'))
    .pipe(rename( path => {
      return {
        dirname: path.dirname.replace('02-js-task', 'example'),
        basename: path.basename,
        extname: '.html'
      };
    }))
    .pipe(gulp.dest(file => {
      return file.base;
    }));

  done();
});

gulp.task('uglify-js', done => {
  gulp.src('src/**/02-js-task/solution/index.js')
    .pipe(babel({
      presets: [
        ['@babel/preset-env', {
          modules: false,
        }]
      ]
    }))
    .pipe(uglify())
    .pipe(rename( path => {
      return {
        dirname: path.dirname.replace('02-js-task/solution', 'example'),
        basename: path.basename,
        extname: '.js'
      };
    }))
    .pipe(gulp.dest(file => {
      return file.base;
    }));

  done();
});

exports.build = gulp.parallel(['uglify-css', 'uglify-js', 'copy-html']);
