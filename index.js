var gulp = require('gulp'),
    gutil = require('gulp-util'),
    print = require('gulp-print'),
    imagemin = require('gulp-imagemin'),
    symbols = require('symbols'),
    success = symbols.success,
    error = symbols.error;

module.exports = function (config) {
    return function () {
        return gulp.src(config.src)
                .on('error', gutil.log.bind(gutil, error + ' Error in Images '))
                .pipe(imagemin())
                .pipe(print(function (filename) {
                    return success + ' ' + filename;
                }))
                .pipe(gulp.dest(config.dest));
    };
};
