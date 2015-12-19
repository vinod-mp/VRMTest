define("utility/index", [
  "angular",
  "utility/utilityFactory",
  ],
  function(angular, utilityFactory, errorMessageMap) {
    var utility = angular.module("utility", []);
    utility.factory("utilityFactory", utilityFactory);
    return utility;
  }
);
