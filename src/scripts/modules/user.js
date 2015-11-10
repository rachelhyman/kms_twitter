var $ = require('jquery');
var Modules = require('./modules');

var k = {
  Twitter: {
    ListsNavButton: '.me .dropdown-menu [data-name=lists] a'
  }
}

var User = Modules.create('User', {
  actions: {
    navigateToLists: function () {
      $(k.Twitter.ListsNavButton).get()[0].click();
    }
  }
});


module.exports = User;