define('directives/index', [
  "angular",
  "directives/appHeader",
  "directives/appHomepage",
  "directives/contactCard",
  "directives/contactEditForm",
  "directives/deleteContact"
  ],
  function(angular, appHeader, appHomepage, contactCard,
           contactEditForm, deleteContact) {

    var directives = angular.module("directives", []);
    directives.directive("appHeader", appHeader);
    directives.directive("appHomepage", appHomepage);
    directives.directive("contactCard", contactCard);
    directives.directive("contactEditForm", contactEditForm);
    directives.directive("deleteContact", deleteContact);
    return directives;
  }
);
