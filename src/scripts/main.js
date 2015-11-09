$ = require('jquery');
Configuration = require('./configuration');
Application = require('./app');

window.onload = function () {
  // TODO: switch on user configuration
  var config = Configuration.default;

  Application.start(config);
};