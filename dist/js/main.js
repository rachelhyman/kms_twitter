(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var routeObject = require('./util/route-object');
var directMessage = require('./modules/dm');

Application = {
  start: function (configuration) {
    return routeObject(configuration, {
      'directMessage': directMessage.start
    });
  }
}

module.exports = Application;
},{"./modules/dm":4,"./util/route-object":6}],2:[function(require,module,exports){
Configuration = {
  default: Object.freeze({
    directMessage: {
      fullscreen: true
    }
  })
};


module.exports = Configuration;
},{}],3:[function(require,module,exports){
$ = require('jquery');
Configuration = require('./configuration');
Application = require('./app');

window.onload = function () {
  // TODO: switch on user configuration
  var config = Configuration.default;

  Application.start(config);
};
},{"./app":1,"./configuration":2,"jquery":"jquery"}],4:[function(require,module,exports){
var $ = require('jquery');
var routeObject = require('../util/route-object');

var k = {
  Twitter: {
    DialogSelector: '.DMDialog'
  },
  KMS: {
    FullscreenClass: 'kms-fullscreen'
  }
};

dm = {
  start: function (config) {
    routeObject(config, {
      'fullscreen': dm.setFullscreen
    });
  },

  setFullscreen: function (shouldBeFullscreen) {
    if (shouldBeFullscreen) {
      $(k.Twitter.DialogSelector).addClass(k.KMS.FullscreenClass);
    }
  }
};

module.exports = dm;
},{"../util/route-object":6,"jquery":"jquery"}],5:[function(require,module,exports){
// modified from `object-path` to produce new objects instead of mutating
// https://github.com/mariocasciaro/object-path
function getKey(key){
  var intKey = parseInt(key);
  if (intKey.toString() === key) {
    return intKey;
  }
  return key;
}
function isEmpty(value){
  if (!value) {
    return true;
  }
  if (_.isArray(value) && value.length === 0) {
    return true;
  } else if (!_.isString(value)) {
    for (var i in value) {
      if (Object.prototype.hasOwnProperty.call(value, i)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function setPath (obj, path, value){
  if (_.isNumber(path)) {
    path = [path];
  }
  if (isEmpty(path)) {
    return obj;
  }
  if (_.isString(path)) {
    return setPath(obj, path.split('.').map(getKey), value);
  }
  var currentPath = path[0];

  if (path.length === 1) {
    var oldVal = obj[currentPath];
    var change = {}
    change[currentPath] = value;
    return _.assign({}, obj, change);
  }

  if (obj[currentPath] === void 0) {
    //check if we assume an array
    if(_.isNumber(path[1])) {
      obj[currentPath] = [];
    } else {
      obj[currentPath] = {};
    }
  }

  var change = {};
  change[currentPath] = setPath(obj[currentPath], path.slice(1), value);
  return _.assign({}, obj, change);
}

function getPath (obj, path, defaultValue) {
  if (_.isNumber(path)) {
    path = [path];
  }
  if (isEmpty(path)) {
    return obj;
  }
  if (isEmpty(obj)) {
    return defaultValue;
  }
  if (_.isString(path)) {
    return getPath(obj, path.split('.'), defaultValue);
  }

  var currentPath = getKey(path[0]);

  if (path.length === 1) {
    if (obj[currentPath] === void 0) {
      return defaultValue;
    }
    return obj[currentPath];
  }

  return getPath(obj[currentPath], path.slice(1), defaultValue);
}

module.exports = {
  get: getPath,
  set: setPath
};
},{}],6:[function(require,module,exports){
_ = require('lodash');
pathAccess = require('./path-access');

function routeObject (obj, routes) {
  return Object.keys(routes)
    .reduce(function (acc, key) {
      var branch = pathAccess.get(obj, key);
      if (branch !== undefined) {
        var modified = routes[key](branch);
        return pathAccess.set(obj, key, modified);
      } else {
        return obj;
      }
    }, obj);
}

module.exports = routeObject;
},{"./path-access":5,"lodash":"lodash"}]},{},[3]);
