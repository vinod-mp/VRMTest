define('directives/index', [
  "angular",
  "directives/appHeader",
  "directives/appHomepage"
  ],
  function(angular, appHeader, appHomepage) {

    var directives = angular.module("directives", []);
    directives.directive("appHeader", appHeader);
    directives.directive("appHomepage", appHomepage);
    return directives;
  }
);
