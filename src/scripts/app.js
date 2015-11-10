var routeObject = require('./util/route-object');
var DirectMessage = require('./modules/dm');
var Hotkeys = require('./hotkeys');

var Application = {
  start: function (configuration) {
    return routeObject(configuration, {
      'hotkeys': Hotkeys.start,
      'DirectMessages': DirectMessage.start
    });
  }
}

module.exports = Application;