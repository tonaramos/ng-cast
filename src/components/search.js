angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<',
      searchResults: '<',
    },
    
    
    templateUrl: 'src/templates/search.html'
  });
