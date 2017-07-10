var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

gulp.task('sass', function(){
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        './src/styles/style.sass'
    ])
        .pipe(sass())
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('build/styles'))
});

gulp.task('scripts', function() {
    return gulp.src([
        './node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
        './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './src/scripts/app.js',
        './src/scripts/controllers/mainCtrl.js',
        './src/scripts/controllers/modalCtrl.js',
        './src/scripts/factories/productsFactory.js'
    ])
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('default', ['sass','scripts']);