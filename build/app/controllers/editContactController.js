define([], function() {
    var editContactController = function($scope, $rootScope, $modalInstance, editingContactObj) {
        
        $scope.editedName = editingContactObj.name;
        $scope.editedPhone = editingContactObj.phone;
        $scope.editedEmail = editingContactObj.email;
        
        $scope.editedConfirm = function () {
                 
            if(typeof $scope.editedName == "undefined" ||
              $scope.editedName.trim() == "" ||
              typeof $scope.editedPhone == "undefined" ||
              $scope.editedPhone.trim() == "" ||
              typeof $scope.editedEmail == "undefined" ||
              $scope.editedEmail.trim() == "") {
                return;
            }
            
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