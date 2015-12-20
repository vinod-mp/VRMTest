define('controllers/index', ["angular",
  "controllers/homeController",
  "controllers/editContactController"                             
  ],
  function(angular, homeController, editContactController) {
    var controllers = angular.module("controllers", []);
    controllers.controller("homeController", homeController);
    controllers.controller("editContactController", editContactController);
    return controllers;
  }
);
