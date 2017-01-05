var gulp = require('gulp');
var gulpif = require('gulp-if');
var cssmin = require('gulp-cssmin');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


var production = process.env.NODE_ENV === 'production';

var dependencies = [
  'alt',
  'react',
  'jquery',
  'underscore'
];

/*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-vendor', function() {
  return browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('vendor.bundle.js'))
    .pipe(buffer())
    .pipe(gulpif(production, uglify({
      mangle: false
    })))
    .pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify', ['browserify-vendor'], function() {
  return browserify({
    entries: 'app/main.js',
    debug: true
  })
    .external(dependencies)
    .transform(babelify, {
      presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(gulpif(production, uglify({
      mangle: false
    })))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Bundle task
 | default :  only for front-end developer
 | build   :  pack react app to "public" dictionary
 | finbot  :  Publich to finbot
 |--------------------------------------------------------------------------
 */
gulp.task('default', ['browserify']);
