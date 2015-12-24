define([], function() {
    var deleteContactController = function($scope, $rootScope, $modalInstance, deletingContactObj) {
        
        $scope.deletingPic = deletingContactObj.picture;
        $scope.deletingName = deletingContactObj.name;
        
        $scope.deleteConfirm = function () {
            $rootScope.$broadcast("deletedContact", deletingContactObj.id);
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
    return deleteContactController;
});