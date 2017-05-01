var fs = require('fs');
var gulp = require('gulp');
var access = require('gulp-accessibility');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var through = require('through2');

gulp.task('a11y', function () {
  return gulp.src([
      '_site/**/*.html',
    ])
    .pipe(access({
      // use jsdom
      browser: false,
      // continue through errors
      force: true,
      reportLevels: {
        notice: false,
        warning: false,
        error: true,
      },
    }))
    .pipe(access.report({
      reportType: 'json',
    }))
    .pipe(rename({
      extname: '.json',
    }))
    .pipe(gulp.dest('a11y'))
    .pipe(through.obj(function (file, encoding, done) {
      // console.warn('!!!', file.path);
      done(null, file);
    }));
});

gulp.task('a11y-summary', function () {
  var reports = [];
  return gulp.src([
      'a11y/**/*.json',
    ])
    .pipe(through.obj(function (file, encoding, done) {
      if (file.isBuffer()) {
        var data = JSON.parse(file.contents.toString());
        var source = Object.keys(data)[ 0 ];
        var report = data[source];
        // console.warn('source:', source, report);
        var log = report.messageLog;
        if (log.length && report.counters) {
          source = source.replace(process.cwd() + '/', '');
          console.warn('%d messages for', log.length, source);
          reports.push({
            file: source,
            report: report,
          });
        }
      }
      done(null);
    }))
    .on('end', function () {
      console.warn('got %d reports', reports.length);
      // sort by number of errors descending
      var errorCount = d => d.report.counters.error;
      reports.sort((a, b) => errorCount(b) - errorCount(a));

      // aggregate issues by id
      var issues = reports.reduce((acc, d) => {
        d.report.messageLog.forEach(msg => {
          if (msg.issue in acc) {
            acc[msg.issue].push(msg);
          } else {
            acc[msg.issue] = [msg];
          }
        });
        return acc;
      }, {});

      // this is our output object
      var result = {
        files: reports.map(d => ({
          path: d.file,
          log: d.report.messageLog.map(msg => ({
            id: msg.issue,
            desc: msg.description,
            element: msg.element,
          })),
        })),
        issues: issues,
      };

      fs.writeFileSync(
        'a11y-summary.json',
        JSON.stringify(result, null, '  '),
        {encoding: 'utf-8'}
      );
    });
});
