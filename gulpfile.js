

const gulp                      = require('gulp'),
      scss                      = require('gulp-sass')(require('sass')),  
      sourcemaps                = require('gulp-sourcemaps'),
      concat                    = require('gulp-concat'),
      uglify                    = require('gulp-uglify'),
      rename                    = require('gulp-rename'), 
      browserSync               = require('browser-sync').create(); 
      deploy                    = require('gulp-gh-pages');

var SRC_FOLDER = './src';
var DIST_FOLDER = './dist';

var SRC_PATH = {    
    ASSETS:  {
        FONTS:      './src/assets/fonts'
        , IMAGES:   './src/assets/images'
        , SCSS:    './src/assets/scss'
        , JS:    './src/assets/js'
    },
    EJS: './src/ejs'  
},

DEST_PATH = {
    ASSETS: {
        FONTS:      './dist/assets/fonts'
        , IMAGES:   './dist/assets/images'
        , CSS:    './dist/assets/css'
        , JS:    './dist/assets/js'
    }
},
// 옵션
OPTIONS = {
    outputStyle: "expanded" 
    , indentType: "space" 
    , indentWidth: 4 
    , precision: 8 
};





gulp.task('html', function () {
    return gulp
    .src( SRC_FOLDER + '/**/*.html' )
    .pipe(gulp.dest( DIST_FOLDER ))    
    .pipe(browserSync.stream()); 
});


gulp.task( 'scss:compile', function () {    
    return gulp
    .src( SRC_PATH.ASSETS.SCSS + '/*.scss' )
    .pipe( sourcemaps.init() )
    .pipe( scss(OPTIONS) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( DEST_PATH.ASSETS.CSS ) )
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
	return gulp
    .src( SRC_PATH.ASSETS.JS + '/*.js' )
    .pipe(sourcemaps.init())    
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
	.pipe(gulp.dest( DEST_PATH.ASSETS.JS ))
	.pipe(browserSync.stream());
});

gulp.task('images', () => {
    return gulp
    .src( SRC_PATH.ASSETS.IMAGES + '/**/*.+(png|jpg|jpeg|gif|ico|jfif)' )
    .pipe(gulp.dest( DEST_PATH.ASSETS.IMAGES ))
    .pipe(browserSync.stream());
});

gulp.task('svg', () => {
    return gulp
    .src(SRC_PATH.ASSETS.IMAGES + '/**/*.svg')
    .pipe(gulp.dest( DEST_PATH.ASSETS.IMAGES ))
    .pipe(browserSync.stream());
});

gulp.task('fonts', () => {
    return gulp
    .src(SRC_PATH.ASSETS.FONTS + '/**/*.+(eot|otf|svg|ttf|woff|woff2)')
    .pipe(gulp.dest( DEST_PATH.ASSETS.FONTS ))
    .pipe(browserSync.stream());
});

// 파일 감시하다가 변경되면 바로 재 배포
gulp.task( 'watch', function () {     
    gulp.watch( SRC_FOLDER + '/**/*.html', gulp.series('html'));       
    gulp.watch( SRC_PATH.ASSETS.SCSS + '/*.scss', gulp.series('scss:compile')); 
    gulp.watch( SRC_PATH.ASSETS.JS + '/*.js', gulp.series('js')); 
    gulp.watch( SRC_PATH.ASSETS.IMAGES + '/**/*.+(png|jpg|jpeg|gif|ico|jfif)', gulp.series('images')); 
    gulp.watch( SRC_PATH.ASSETS.IMAGES + '/**/*.svg', gulp.series('svg')); 
    gulp.watch( SRC_PATH.ASSETS.FONTS + '/**/*.+(eot|otf|svg|ttf|woff|woff2)', gulp.series('fonts')); 
});

// 가상 서버 띄우기 
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: [ 'dist' ],
        port: 3000,
        open: true
      }
    });
});

gulp.task('build', gulp.series('html','scss:compile','js','images','svg','fonts', gulp.parallel('browserSync', 'watch')));
gulp.task('default', gulp.series('build', gulp.parallel('browserSync', 'watch')));


gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
      .pipe(deploy())
  });

