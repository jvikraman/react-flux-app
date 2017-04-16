//define jQuery globally & tell browserify about it
$ = jQuery = require('jquery');

//sample js file to test browserify
var app = console.log('Hello world from browserify');

module.exports = app;