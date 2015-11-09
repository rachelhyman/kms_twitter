var Configuration = {
  default: Object.freeze({
    hotkeys: [
      {
        key: 'd',
        module: 'dm',
        action: 'toggleVisible'
      },
      {
        key: 'l',
        module: 'user',
        action: 'navigateToLists'
      }
    ],
    directMessage: {
      fullscreen: false
    }
  })
};


module.exports = Configuration;