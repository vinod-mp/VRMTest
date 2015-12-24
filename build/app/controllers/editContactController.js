define([], function() {
    var editContactController = function($scope, $rootScope, $modalInstance, editingContactObj) {
        
        console.log("editContactController editid ", editingContactObj);
        
        $scope.editedName = editingContactObj.name;
        $scope.editedPhone = editingContactObj.phone;
        $scope.editedEmail = editingContactObj.email;
        
        $scope.editedConfirm = function () {
            
            editingContactObj.name = $scope.editedName;
            editingContactObj.phone = $scope.editedPhone;
            editingContactObj.email = $scope.editedEmail;
            
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
    return editContactController;
});