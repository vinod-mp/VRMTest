define([], function() {
    var deleteContactController = function($scope, $rootScope, $modalInstance, utilityFactory) {
        
        var self = this,
        contactId = utilityFactory.getSelectedContactId();
            
        $scope.confirm = function () {
            utilityFactory.deleteContact(contactId);
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
    deleteContactController.$inject = ["$scope", "$rootScope", "$modalInstance", "utilityFactory"];
    return deleteContactController;
});