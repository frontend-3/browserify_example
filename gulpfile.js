var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('browserify:example-1', function () {
  var b = browserify({
    entries: './src/example-1/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/example-1/'));
});

gulp.task('browserify:example-2', function () {
  var b = browserify({
    entries: './src/example-2/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/example-2/'));
});

gulp.task('browserify:example-coffee', function () {
  var b = browserify({
    entries: './src/example-coffee/main.coffee',
    extensions:[".coffee"],
    transform: ["coffeeify"],
    debug: true
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/example-coffee/'));
});

gulp.task('browserify:example-coffee-react', function () {
  var b = browserify({
    entries: './src/example-coffee-react/main.coffee',
    extensions:[".coffee"],
    transform: ["cjsxify"],
    debug: true
  });

  return b.bundle()
    .pipe(source('main.js'))
    //.pipe(buffer())
    //.pipe(sourcemaps.init({loadMaps: true}))
    //    .pipe(uglify())
    //    .on('error', gutil.log)
    //.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/example-coffee-react/'));
});
