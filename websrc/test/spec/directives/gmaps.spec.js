define(["app", "angular", "angular_mocks" ,"views/maps.html", "views/retailerLists.html"],
  function(App, angular) {

    describe('Gmaps Directive', function() {
      var ctrl, $scope, elm, mock = angular.mock;

      beforeEach(function() {
        var self = this;

        self.facilityForLocationService = {
          query: {}
        };
        self.$stateParams = {}
        self.utilityFactory = {
          getCurrentYear: function() {},
          getMapStyleConfig: function(){}
        };
        self.errorHandler = {};
        self.errorMessageMap = {};
        self.analytics = {
          isAnalyticDataEmpty: function() {},
          addDataAndSendBeaconWithBcqData: function() {}
        };
        self.b2cClientService = {
          query: function() {}
        };
        self.applicationContext = {};
        
        mock.module('directives', {
          facilityForLocationService: self.facilityForLocationService,
          utilityFactory: self.utilityFactory,
          errorHandler: self.errorHandler,
          errorMessageMap: self.errorMessageMap,
          analytics: self.analytics,
          b2cClientService: self.b2cClientService,
          applicationContext: self.applicationContext,
          $stateParams: self.$stateParams
        });

      });

      beforeEach(module('views/maps.html'));
      beforeEach(module('views/retailerLists.html'));

      
      beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
      }));

      function compileDirective() {
        var element = angular.element('<div gmaps></div>');
        element.appendTo(document.body);
        inject(function($compile) {
          elm = $compile(element)($scope);
        });
        // $digest is necessary to finalize the directive generation
        $scope.$digest();
      }

      /* Here comes the testcases */
      
      describe('initialisation', function() {
        // before each test in this block, generates a fresh directive
          beforeEach(function() {
              compileDirective();
          });
          
          it('should have a placeholder', function () {
            expect(elm.find('.form-control.location-textbox').attr('placeholder')).toBe('Enter postcode or town');
          });

          it('should have a popover attribute', function () {
            expect(elm.find('.form-control.location-textbox').attr('popover')).toBe('Please enter a valid UK postcode or City/Town.');
          });

          it('should load list view as default', function () {
            expect(elm.find('.tabview-option.list-option.active').html()).toBe('List View');
          });
          it('should have map view', function () {
            expect(elm.find('.tabview-option.map-option').html()).toBe('Map View');
          });          
         
      });
    });
});
