define([], function(){
  var appHeader = function($location, $rootScope) {
    return {
      link: function($scope) {
            
      },
      templateUrl: 'views/header.html'

    };
  };

  appHeader.$inject = ["$location", "$rootScope"];

  return appHeader;
});
