const gulp = require('gulp');
const exec = require('child_process').exec;
const exit = require('child_process').kill;
var a;
gulp.task('watch',() => {
  gulp.watch('./dist/**/*',() => {
    if(a){
      process.kill(a.pid,'SIGHUP')
    }
     a = exec("electron ./")
  })
})
