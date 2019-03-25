var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssImport = require('postcss-import');
var cssVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');
var cssMixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
	console.log('Running STYLES task');
	return gulp.src('./app/src/assets/css/styles.css')
		.pipe(postcss([cssImport, cssMixins, cssVars, cssNested, hexrgba, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/css'));
});