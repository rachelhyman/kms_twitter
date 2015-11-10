var $ = require('jquery');
var routeObject = require('../util/route-object');

var k = {
  Twitter: {
    DialogSelector: '.DMDialog',
    NavButtonSelector: '.dm-nav a',
    CloseOverlayButtonSelector: '.DMActivity-close'
  },
  KMS: {
    FullscreenClass: 'kms-fullscreen'
  }
};

var DirectMessages = {
  start: function (config) {
    routeObject(config, {
      'fullscreen': DirectMessages.setFullscreen
    });
  },

  actions: {
    show: function () {
      $(k.Twitter.NavButtonSelector).get()[0].click();
    },
    hide: function () {
      $(k.Twitter.CloseOverlayButtonSelector).get()[0].click();
    },
    toggleVisible: function () {
      if (DirectMessages.state.isOverlayVisible()) {
        DirectMessages.actions.hide();
      } else {
        DirectMessages.actions.show();
      }
    }

  },

  state: {
    isOverlayVisible: function () {
      return $(k.Twitter.DialogSelector).is(':visible');
    }
  },

  setFullscreen: function (shouldBeFullscreen) {
    if (shouldBeFullscreen) {
      $(k.Twitter.DialogSelector).addClass(k.KMS.FullscreenClass);
    }
  }
};

module.exports = DirectMessages;