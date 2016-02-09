var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	minifyCSS = require('gulp-rename'),
	notify = require('gulp-notify'),
	rename = require('gulp-minify-css'),
	browserSync = require('browser-sync');
	// wiredep=require('wiredep').stream;


gulp.task('default', function () {
  gulp.src('css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(minifyCSS())
    .pipe(rename("bundle.min.css"))
    .pipe(notify("Done!"))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
		]).on('change',browserSync.reload);
});


gulp.task('default', ['server','watch']);

gulp.task('server', function(){
	browserSync({
		port:9000,
		server:{
			baseDir: 'app'
		}
	});
});

