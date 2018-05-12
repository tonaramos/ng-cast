angular.module('video-player')
  // .controller('videoPlayerController', function () {
  //   this.url = function () {
  //     return this.currentVideo ? 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId : 'Please wait';
  //   };
  // })


  .component('videoPlayer', {
    // controller: 'videoPlayerController',
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      currentVideo: '<',
    }
  });
