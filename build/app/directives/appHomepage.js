define([], function(){
  var appHomepage = function() {
    return {
      restrict: "AE",
      templateUrl: "views/home.html"
    };
  };

  appHomepage.$inject = [];

  return appHomepage;
});
