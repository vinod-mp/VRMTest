define('controllers/index', ["angular",
  "controllers/homeController",
  "controllers/addContactController",
  "controllers/editContactController",
  "controllers/deleteContactController"                             
  ],
  function(angular, homeController, addContactController, editContactController, deleteContactController) {
    var controllers = angular.module("controllers", []);
    controllers.controller("homeController", homeController);
    controllers.controller("addContactController", addContactController);
    controllers.controller("editContactController", editContactController);
    controllers.controller("deleteContactController", deleteContactController);
    return controllers;
  }
);
