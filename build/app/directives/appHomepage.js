define([], function(){
  var appHomepage = function() {
    return {
      restrict: "AE",
      link: function() {
        
      },
      templateUrl: "views/home.html"
    };
  };

  appHomepage.$inject = [];

  return appHomepage;
});
