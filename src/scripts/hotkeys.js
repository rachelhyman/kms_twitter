var Mousetrap = require('mousetrap');

var modules = {
  'dm': require('./modules/dm')
}

var Hotkeys = {
  start: function (hotkeys) {
    hotkeys.forEach(function (elm) {
      var module = modules[elm.module];
      if (module != null) {
        var action = module.actions[elm.action];
        if (action != null) {
          Mousetrap.bind(elm.key, action);
        } else {
          console.warn("Attempted to add a hotkey with nonexistent action",
                       elm.module + "::" + elm.action);
        }
      } else {
        console.warn("Attempted to add a hotkey with nonexistent module", elm.module);
      }
    });
  }
};

module.exports = Hotkeys;