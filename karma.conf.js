const webpack = require('./webpack.config.babel');
const fileGlob = 'src/**/*.test.js'
const preprocessors = {
  [fileGlob]: ['webpack'],
}

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [fileGlob],
    preprocessors,
    webpack,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  })
}
