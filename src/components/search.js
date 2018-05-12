angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<',
      searchResults: '<',
      debouncer: '<',
    },
    
    
    templateUrl: 'src/templates/search.html'
  });
