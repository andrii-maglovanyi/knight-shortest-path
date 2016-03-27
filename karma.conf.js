module.exports = function (config) {
    'use strict';

    config.set({
        autoWatch: true,
        singleRun: true,

        frameworks: ['jasmine', 'browserify'],

        files: [
            {pattern: 'js/test/**/*.js', load: false}
        ],

        reporters: ['progress'],

        preprocessors: {
            './js/test/**/*.js': ['browserify'],
        },

        browsers: ['PhantomJS'],

        browserify: {
            debug: true
        }
    });
};
