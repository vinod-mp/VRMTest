define([], function() {
    var addContactController = function($scope, $rootScope, $modalInstance, newContactId) {
        
        var contactObj = {};
        
        contactObj.id = newContactId;
        contactObj.picture = "assets/default.gif";
        console.log("newContactId ", newContactId);
        $scope.addConfirm = function () {
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
