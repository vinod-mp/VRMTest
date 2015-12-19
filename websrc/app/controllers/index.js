define('controllers/index', ["angular",
  "controllers/homeController",
  ],
  function(angular, homeController) {
    var controllers = angular.module("controllers", []);
    controllers.controller("homeController", homeController);
    return controllers;
  }
);
