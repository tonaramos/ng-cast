angular.module('video-player')
  .controller('videoPlayerController', function () {
    this.url = function () {
      return this.video ? 'https://www.youtube.com/embed/' + this.video.id.videoId : 'Please wait';
    };
  })


  .component('videoPlayer', {
    controller: 'videoPlayerController',
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      video: '<',
    }
  });
