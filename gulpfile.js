
var gulp = require('gulp'),
 		header = require('gulp-header');

var info = require('./package.json');
 		
var banner  = [ '/*',
				'<%= info.author %>',
				'<%= info.version %>',
				'<%= info.license %> licensed',
				'Copyright (C) <%= info.author %>',
				'*/',
				''
				].join('\n');

gulp.task('scripts', function(){ 
	gulp.src('js/src/**/*.js')
		.pipe(header(banner, {info: info }))
		.pipe(gulp.dest('js'));
});

gulp.task('default', ['scripts'], function(){
	var watcher = gulp.watch('js/src/**/*.js', ['scripts']); 
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + 
		event.type + ', running tasks...');
}); });