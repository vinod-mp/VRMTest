define('directives/index', [
  "angular",
  "directives/appHeader",
  "directives/appFooter",
  "directives/appHomepage",
  ],
  function(angular, appHeader, appFooter,appHomepage) {

    var directives = angular.module("directives", []);
    directives.directive("appHeader", appHeader);
    directives.directive("appFooter", appFooter);
    directives.directive("appHomepage", appHomepage);
    return directives;
  }
);
