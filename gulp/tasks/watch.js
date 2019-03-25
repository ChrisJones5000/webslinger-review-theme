var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	console.log('Running WATCH task');

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/*.html', function() {
		browserSync.reload();
	});

	watch('./app/src/assets/css/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./app/src/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/css/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});