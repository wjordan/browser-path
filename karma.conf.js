module.exports = function(config) {
  config.set({
    files:['test/**/*.js'],
    preprocessors: { 'test/**/*.js': [ 'browserify' ] },
    frameworks: ['mocha', 'browserify'],
    browsers: ['PhantomJS'],
    browserify: {
      debug: true,
      plugin: [ 'tsify' ],
      builtins: ['assert', '_process', 'process']
    }
  });
};
