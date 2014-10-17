var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var compileLess = require('broccoli-less-single');
var autoprefixer = require('broccoli-autoprefixer');
var filterReact = require('broccoli-react');
var concat = require('broccoli-concat');

//pick all files
var styles = pickFiles('styles', {
  srcDir: '/',
  destDir: '/dist'
});

var appJs = pickFiles('app', {
  srcDir: '/',
  destDir: 'dist'
});
var data = pickFiles('app', {
  srcDir: '/data/',
  destDir: 'dist'
});
var adapters = pickFiles('app', {
  srcDir: '/data/adapters',
  destDir: 'dist'
});
var serializers = pickFiles('app', {
  srcDir: '/data/serializers',
  destDir: 'dist'
});
appJs = mergeTrees([appJs, data, adapters, serializers]);

var reactJs = pickFiles('app/react', {
  srcDir: '/',
  destDir: 'dist/react'
});

//compile and autoprefix less-files
var appCss = compileLess([styles], 'dist/app.less', 'assets/app.css' );
appCss = autoprefixer(appCss);

//concat all javascript files
appJs = concat(appJs, {
  inputFiles: [
    'dist/*.js'
  ],
  outputFile: '/assets/app.js'
});

//compile and concat all react files
reactJs = filterReact(reactJs, {extensions: ['js']});
reactJs = concat(reactJs, {
  inputFiles: [
    'dist/react/*.js'
  ],
  outputFile: '/assets/react.js'
});

//concat javascript and react files
var app = new mergeTrees([appJs, reactJs], { overwrite: true });
app = concat(app, {
  inputFiles: [
    'assets/*.js',
  ],
  outputFile: '/assets/app.js'
});

var sourceTrees = [app, appCss];
var appAndDependencies = new mergeTrees(sourceTrees, { overwrite: true });

module.exports = mergeTrees([appAndDependencies, 'public']);
