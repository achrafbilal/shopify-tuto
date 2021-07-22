const gulp=require('gulp');
const themeKit=require('@shopify/themekit');
const sass=require('gulp-sass')(require('node-sass'));
const cleanCSS = require('gulp-clean-css');
 

gulp.task
(
    'sass',
    function()
        {
             
            // gulp.src('assets/theme.css')
            // .pipe(cleanCSS({compatibility: 'ie11'}))
            // .pipe(gulp.dest('assets/min'))
            return gulp.src('scss/global.scss')
            .pipe(sass())
            .pipe(cleanCSS({compatibility: 'ie11'}))
            .pipe(gulp.dest('assets'))
        }
)
gulp.task
(
    'watch',
    function()
        {
             gulp.watch('scss/*.scss',gulp.series('sass'))
             themeKit.command('watch',{
                 allowLive:true,
                 env:'development'
             })
        }
)

