var routeObject = require('./util/route-object');
var directMessage = require('./modules/dm');

var Application = {
  start: function (configuration) {
    return routeObject(configuration, {
      'directMessage': directMessage.start
    });
  }
}

module.exports = Application;