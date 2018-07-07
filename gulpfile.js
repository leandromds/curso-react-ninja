'use strict'

const gulp = require('gulp')
const { spawn } = require('child_process')

gulp.task('lint', (cb) => {
  const cdm = spawn('yarn', ['lint'], { stdio: 'inherit' })
  cdm.on('close', () => cb)
})

gulp.task('default', ['lint'], () => {
  gulp.watch('src/**/*.js', ['lint'])
})
