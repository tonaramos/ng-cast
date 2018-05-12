angular.module('video-player')

  .component('app', {
    controller: function (youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      this.onClick = (clickedVid) => {
        this.currentVideo = clickedVid;
      };
      this.selectVideo = function() {

      };
      this.searchResults = (str) => {
        console.log(str);
        youTube.search({
          query: str,
          max: 5,
          key: YOUTUBE_API_KEY,
        }, this.result);
      };
      this.result = (video) => {
        this.currentVideo = video.data.items[0]; 
        this.videos = video.data.items;
      };
    },
    templateUrl: 'src/templates/app.html' 
  
  });
