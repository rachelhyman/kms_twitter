var $ = require('jquery');
var Configuration = require('./configuration');
var Application = require('./app');

window.onload = function () {
  // TODO: switch on user configuration
  var config = Configuration.default;

  Application.start(config);
};