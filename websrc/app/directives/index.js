define('directives/index', [
  "angular",
  "directives/appHeader",
  "directives/appHomepage",
  "directives/contactCard"
  ],
  function(angular, appHeader, appHomepage, contactCard) {

    var directives = angular.module("directives", []);
    directives.directive("appHeader", appHeader);
    directives.directive("appHomepage", appHomepage);
    directives.directive("contactCard", contactCard);
    return directives;
  }
);
