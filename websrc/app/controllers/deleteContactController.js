define([], function() {
    var deleteContactController = function($scope, $rootScope, $modalInstance, utilityFactory) {
        
        var self = this, contactList;
        contactList = utilityFactory.singersData();        
        self.contacts = contactList;
        
        var contactId;
        
        contactId = $rootScope.selectedContactId;
            
        $scope.confirm = function () {

            utilityFactory.deleteContact(contactId);

            $modalInstance.close();
        };

        $scope.cancel = function () {
            console.log("Cancel");
            $modalInstance.dismiss('cancel');
        };
    };
    deleteContactController.$inject = ["$scope", "$rootScope", "$modalInstance", "utilityFactory"];
    return deleteContactController;
});