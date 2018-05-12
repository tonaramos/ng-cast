angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(options, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: 'shaggy',  //variable with text from search bar
          maxResults: '5',
          key: YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
          type: 'video',
          part: 'snippet',
        } 
        
      }).then(function successCallBack(response) {
        // With the data succesfully returned, call our callback
        console.log('success log', response);
        callback(response);
      }, function errorCallback(response) {   
        console.log('error log', response);
      });
    };
  });

