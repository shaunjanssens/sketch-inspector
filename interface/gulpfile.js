/* Needed gulp config */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var reload = browserSync.reload;

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

/* Scripts task */
gulp.task('scripts', function() {
  return gulp.src([
      'js/jquery.min.js',
      'js/scrollbar.min.js',
      'js/clipboard.min.js',
      'js/main.js'
    ])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

/* Sass task */
gulp.task('sass', function () {
    gulp.src('scss/main.scss')
    .pipe(plumber())
    .pipe(sass({
        includePaths: ['scss']
    }))
//    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css'))
    /* Reload the browser CSS after every change */
    .pipe(reload({stream:true}));
});

/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});


/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
    browserSync.init(['assets/css/*.css', 'assets/js/*.js'], {
        /*proxy: 'your_dev_site.url'*/
        server: {
            baseDir: './'
        }
    });
});

/* Watch scss, js and html files, doing different things with each. */
gulp.task('default', ['sass', 'scripts', 'browser-sync'], function () {
    /* Watch scss, run the sass task on change. */
    gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass'])
    /* Watch app.js file, run the scripts task on change. */
    gulp.watch(['js/*.js'], ['scripts'])
    /* Watch .html files, run the bs-reload task on change. */
    gulp.watch(['*.html'], ['bs-reload']);
});
