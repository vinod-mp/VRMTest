define([], function() {
    var addContactController = function($scope, $rootScope, $modalInstance, newContactId) {
        
        var contactObj = {};
        
        contactObj.id = newContactId;
        contactObj.picture = "assets/default.gif";
        
        $scope.addConfirm = function () {
        
            if(typeof $scope.newName == "undefined" ||
              $scope.newName.trim() == "" ||
              typeof $scope.newPhone == "undefined" ||
              $scope.newPhone.trim() == "" ||
              typeof $scope.newEmail == "undefined" ||
              $scope.newEmail.trim() == "") {
                return;
            }
            contactObj.name = $scope.newName;
            contactObj.phone = $scope.newPhone;
            contactObj.email = $scope.newEmail;
            console.log("addConfirm contactObj", contactObj);
            //contactObj.picture = "assets/default.gif";
            $rootScope.$broadcast("addedContact", contactObj);

            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
    
    return addContactController;
});
