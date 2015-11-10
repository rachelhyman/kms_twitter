var $ = require('jquery');

var k = {
  Twitter: {
    ListsNavButton: '.me .dropdown-menu [data-name=lists] a'
  }
}

var User = {
  actions: {
    navigateToLists: function () {
      $(k.Twitter.ListsNavButton).get()[0].click();
    }
  }
}


module.exports = User;