define(["app", "controllers/createLabelDialogController", "angular", "angular_mocks"], 
  function(App, createLabelDialogController, angular, parcelJson) {

    describe('Unit: CreateLabelDialogController', function() {

      var ctrl, mock = angular.mock, scope, modalInstance;

      beforeEach(mock.inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        
        modalInstance = {
            createAnotherLabelYes: function() {},
            createAnotherLabelNo: function() {},
            close: function() {},
            dismiss: function() {}
        };
        
        ctrl = $controller(createLabelDialogController, {
          "$scope": scope,
          "$modalInstance": modalInstance
        });

      }));
      
      describe('Create another dialog test', function () {
        it('Create another dialog box\'s createAnotherLabelYes function should be defined', function () {
          expect(scope.createAnotherLabelYes).toBeDefined();
        });
      });
          
      describe('Create another dialog test', function () {
        it('Create another dialog box\'s createAnotherLabelNo function should be defined', function () {
          expect(scope.createAnotherLabelNo).toBeDefined();
        });
      });
    });

});