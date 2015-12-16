'use strict';
// Karma configuration
// Generated on Tue Sep 17 2013 14:37:13 GMT+0200 (CEST)

module.exports = function(config) {
 config.set({

  // base path, that will be used to resolve files and exclude
  basePath: '',


  // frameworks to use
  frameworks: ['jasmine'],

  // list of files / patterns to load in the browser
  files: [
   'node_modules/es6-promise/dist/es6-promise.js',
   'node_modules/js-data/dist/js-data.js',
   'test.spec.js',
  ],



  preprocessors: {
   'node_modules/js-data/dist/js-data.js': ['coverage'],
  },

  // test results reporter to use
  // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage', 'spec'
  reporters: ['dots', 'coverage'],


  // web server port
  port: 9876,


  // enable / disable colors in the output (reporters and logs)
  colors: true,


  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  logLevel: config.LOG_INFO,


  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,


  // Start these browsers, currently available:
  // - Chrome
  // - ChromeCanary
  // - Firefox
  // - Opera
  // - Safari (only Mac)
  // - PhantomJS
  // - IE (only Windows)
  browsers: ['PhantomJS'],


  // Continuous Integration mode
  // if true, it capture browsers, run tests and exit
  singleRun: false,
 });
};