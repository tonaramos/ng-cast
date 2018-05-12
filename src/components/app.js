angular.module('video-player')

  .component('app', {
    controller: function () {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      this.onClick = (clickedVid) => {
        this.currentVideo = clickedVid;
      };
      this.selectVideo = function() {

      };
      this.searchResults = function() {
        
      };
  
    },
    templateUrl: 'src/templates/app.html' 
  
  });
