define([], function() {
    var homeController = function($scope, $modal, $rootScope, utilityFactory) {
        
        var self = this, contactList;
        contactList = utilityFactory.singersData();        
        self.contacts = contactList;
        
        $scope.open = function () {
            console.log("Inside open fun");
            var modalInstance = $modal.open({
              animation: $scope.animationsEnabled,
              templateUrl: 'myModalContent.html',
              controller: 'editContactController'
            });
            $rootScope.$broadcast("editContactLstnr");
        }

    };
    homeController.$inject = ["$scope", "$modal", "$rootScope", "utilityFactory"];
    return homeController;
});