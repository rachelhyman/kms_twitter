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