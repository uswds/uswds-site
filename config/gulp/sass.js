var autoprefixer  = require('autoprefixer');
var combineMq = require('gulp-combine-mq');
var cssnano       = require('cssnano');
var dutil     = require('./doc-util');
var gulp      = require('gulp');
var linter    = require('gulp-scss-lint');
var packCSS       = require('css-mqpacker');
var postcss       = require('gulp-postcss');
var sass      = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var strip     = require('gulp-strip-css-comments');
var task      = 'sass';

gulp.task('build-sass', function () {
  var plugins = [
    autoprefixer({ browsers: ['> 1%','Last 2 versions','IE 11'], cascade: false, }),
    packCSS({ sort: true }),
    cssnano({ autoprefixer: { browsers: '> 1%, Last 2 versions, IE 11' }})
  ];
  return gulp.src('./css/**/*.scss')
    .pipe(sourcemaps.init({largeFile: true}))
    .pipe(
      sass({
        includePaths: [ './node_modules' ],
        outputStyle: 'expanded',
      })
        .on('error', function(error) {
          sass.logError.bind(this)(error);

          if (process.env.NODE_ENV !== 'development') {
            process.exit(1);
          }
        })
    )
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'))
});

gulp.task('scss-lint', function (done) {

  if (!cFlags.test) {
    dutil.logMessage('scss-lint', 'Skipping linting of Sass files.');
    return done();
  }

  return gulp.src([
    './css/**/*.scss'
    ])
    .pipe(linter({
      config: '.scss-lint.yml',
    }))
    .pipe(linter.failReporter('E'));

});

gulp.task(task,
  gulp.series(
    'build-sass'
  )
);
