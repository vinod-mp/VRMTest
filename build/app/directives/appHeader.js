define([], function(){
  var appHeader = function($location, $rootScope) {
    return {
      templateUrl: 'views/header.html'
    };
  };

  appHeader.$inject = ["$location", "$rootScope"];

  return appHeader;
});
