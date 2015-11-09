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

var dm = {
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