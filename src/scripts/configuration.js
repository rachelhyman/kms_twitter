var Configuration = {
  default: Object.freeze({
    hotkeys: [
      {
        key: 'd',
        module: 'DirectMessages',
        action: 'toggleVisible'
      },
      {
        key: 'l',
        module: 'User',
        action: 'navigateToLists'
      }
    ],
    DirectMessages: {
      fullscreen: false
    }
  })
};


module.exports = Configuration;