define([], function() {
    var editContactController = function($scope, utilityFactory) {
        
        var self = this, contactList;
        contactList = utilityFactory.singersData();        
        self.contacts = contactList;
        
        $scope.createAnotherLabelYes = function () {
        console.log("YES");
        $modalInstance.close();
      };

      $scope.createAnotherLabelNo = function () {
        console.log("NO");
        $modalInstance.dismiss('cancel');
      };
        
        
    };
    editContactController.$inject = ["$scope", "utilityFactory"];
    return editContactController;
});