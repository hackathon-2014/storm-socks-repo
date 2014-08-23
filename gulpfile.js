var gulp = require('gulp');
var pkg = require('./package.json');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var bower = require('gulp-bower-files');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var jasmine = require('gulp-jasmine');

serverFiles = "./src/*.js";
clientFiles = "./app/**/*.js";
buildPath = "./dist";
publicPath = "./public/**/*.html";
clientJsPath = buildPath + "/js";

gulp.task('default', ['compile', 'server'], function() {});
gulp.task('debug', ['compile', 'debugServer'], function() {});

gulp.task('config:default', function() {
  gulp.src('./config.json.default')
    .pipe(rename('./dist/config.json'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('compile',['compile:templates', 'compile:server', 'compile:client', 'compile:static', 'compile:css', 'compile:lib'], function(){
});

gulp.task('compile:server', function () {
  gulp.src(serverFiles)
      .pipe(gulp.dest(buildPath));
});

gulp.task('compile:client', function () {
  gulp.src(clientFiles)
    .pipe(browserify())
    .pipe(gulp.dest(clientJsPath));
});

gulp.task('compile:lib', function () {
  gulp.src('./lib/**/*.js')
    .pipe(gulp.dest(buildPath + '/js/'));
});

gulp.task('compile:static', function() {
  gulp.src(["./static/*.png", "./static/*.jpg"])
    .pipe(gulp.dest("./dist/img/"));

});

gulp.task('compile:css', function () {
  gulp.src('./css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(buildPath + '/css'));

  gulp.src('./css/*.css')
    .pipe(gulp.dest(buildPath + '/css'));
});

gulp.task('compile:templates', function(){
  gulp.src(publicPath)
  .pipe(gulp.dest(buildPath));
});

gulp.task('bower', function() {
  bower()
    .pipe(gulp.dest(buildPath + "/js"));
});

gulp.task('test', function() {
  gulp.src('./test/*.js')
    .pipe(jasmine());
});

gulp.task('server', ['compile'], function() {
  nodemon({ script: './dist/server.js',
            ext: 'html js scss',
            ignore: ['/dist/*'] })
    .on('change', ['compile'])
    .on('restart', function () {
    });
});

gulp.task('debugServer', ['compile'], function() {
  nodemon({ script: './dist/server.js',
            ext: 'html js scss',
            ignore: ['/emailFiles/*'],
            nodeArgs: ['debug']})
    .on('change', ['compile'])
    .on('restart', function () {
    });
});
