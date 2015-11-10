var Configuration = {
  default: Object.freeze({
    Hotkeys: [
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
      fullscreen: true
    },
    Timeline: {
      likeTooltip: {
        like: 'Smash',
        unlike: 'Unsmash'
      },
      likeEmoji: 'x'
    }
  })
};


module.exports = Configuration;