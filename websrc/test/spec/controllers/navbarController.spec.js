define(["app", "controllers/navbarController", "angular", 
  "angular_mocks"], function(App, navbarController, angular) {

    describe('Unit: NavbarController', function() {
      var mockTrackService, ctrl, $scope, mock = angular.mock;  
      
      beforeEach(function() {
        mockTrackService = {};
        analytics = {};
      });
      beforeEach(mock.inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        ctrl = $controller(navbarController, {
          $scope: $scope, "analytics":analytics
        });
      }));

      it('should have a property with default value as false', function() {
        expect(ctrl.isHidden).toBeFalsy();
      });
    });

});