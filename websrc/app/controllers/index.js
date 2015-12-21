define('controllers/index', ["angular",
  "controllers/homeController",
  "controllers/editContactController",
  "controllers/deleteContactController"                        
  ],
  function(angular, homeController, editContactController, deleteContactController) {
    var controllers = angular.module("controllers", []);
    controllers.controller("homeController", homeController);
    controllers.controller("editContactController", editContactController);
    controllers.controller("deleteContactController", deleteContactController);
    return controllers;
  }
);
