angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });


/*
--app.js
.component('app', {
  controller : function () {
    this.videos = window.exampleVideoData
    console.log(this.videos);
  },
  templateUrl:'./src/templates/app.html' 
  
});
*/
