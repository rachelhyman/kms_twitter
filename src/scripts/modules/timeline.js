var $ = require('jquery');
var _ = require('lodash');
var Modules = require('./modules');
var routeObject = require('../util/route-object');

var k = {
  Twitter: {
    // ??? very confused by this tooltip stuff
    LikeTooltip: '.ProfileTweet-actionList .ProfileTweet-action--favorite .ProfileTweet-actionButton .IconContainer',
    UnlikeTooltip: '.ProfileTweet-actionList .ProfileTweet-action--favorite .ProfileTweet-actionButtonUndo .IconContainer',
    LikeGraphic: '.HeartAnimation'
  },
  KMS: {
    CustomLikeClass: 'kms-customlike'
  }
}


function setLikeTooltip (options) {
  options = _.defaults(options, {
    like: 'Like',
    unlike: 'Undo like'
  });

  $(k.Twitter.LikeTooltip).data('original-title', options.like);
  $(k.Twitter.LikeTooltip).attr('title', options.like);
  $(k.Twitter.UnlikeTooltip).data('original-title', options.unlike);
  $(k.Twitter.UnlikeTooltip).attr('title', options.unlike);
}

// TODO
// function setLikeEmoji (charCode) {
//   $(k.Twitter.LikeGraphic).addClass(k.KMS.CustomLikeClass);
// }

var Timeline = Modules.create('Timeline', {
  start: function (config) {
    routeObject(config, {
      'likeTooltip': setLikeTooltip
    });
  }
});


module.exports = Timeline;