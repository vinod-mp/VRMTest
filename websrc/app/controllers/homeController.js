define([], function() {
    var homeController = function($scope, $modal, $rootScope, utilityFactory) {
        
        var self = this, contactList;
        utilityFactory.singersData();        
        self.contacts = $rootScope.singersObj;
                
        $scope.$on("editContactId", function(response, contactId) {
            $rootScope.selectedContactId = contactId;
            var modalInstance = $modal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'editContact.html',
              controller: 'editContactController'
            });
        });
        
        $scope.$on("deleteContactId", function(response, contactId) {
            $rootScope.selectedContactId = contactId;
            var modalInstance = $modal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'deleteContact.html',
              controller: 'deleteContactController'
            });
        });
    };
    homeController.$inject = ["$scope", "$modal", "$rootScope", "utilityFactory"];
    return homeController;
});