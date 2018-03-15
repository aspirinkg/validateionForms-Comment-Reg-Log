const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
    	server: { baseDir: './'}
    });
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./css/*.css').on('change', browserSync.reload);
});

gulp.task('default',['server'], function() {
    // content
});