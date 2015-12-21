define([], function() {
    var editContactController = function($scope, $rootScope, $modalInstance, utilityFactory) {
        
        var self = this, contactList;
        contactList = $rootScope.singersObj;        
        self.contacts = contactList;
        
        var contactId = utilityFactory.getSelectedContactId();
            
        var editableContactObj = utilityFactory.getContoact(contactId);
        
        $scope.confirm = function () {
            if(editableContactObj.length == 1) {
                editableContactObj.name = $(".contact-modal-body #cname").val();
                editableContactObj.phone = $(".contact-modal-body #phone").val();
                editableContactObj.email = $(".contact-modal-body #email").val();            
                utilityFactory.setContact(contactId, editableContactObj);
            }
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
    editContactController.$inject = ["$scope", "$rootScope", "$modalInstance", "utilityFactory"];
    return editContactController;
});