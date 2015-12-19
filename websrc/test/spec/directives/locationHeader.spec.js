define(["app", "angular", "angular_mocks" ,"views/location-input.html"],
  function(App, angular) {

    describe('Location header directive', function() {
      var ctrl, $scope, elm, mock = angular.mock;

      beforeEach(function() {
        var self = this;

        self.broadcast = function() {};
        self.removeLocationsList = function() {};
        self.showErrorPopup = function() {};
        self.hideErrorPopup = function() {};
        self.validateAndRedirect = function() {};
        self.utilityFactory = {
          showTooltip: function() {},
          hideTooltip: function(){}
        };
        self.storeFinderAnalytics = function() {};
        self.sendAnalyticsData = function() {};
        self.analytics = {
        };
        mock.module('directives', {
          broadcast: self.broadcast,
          removeLocationsList: self.removeLocationsList,
          showErrorPopup: self.showErrorPopup,
          hideErrorPopup: self.hideErrorPopup,
          utilityFactory: self.utilityFactory,
          validateAndRedirect: self.validateAndRedirect,
          storeFinderAnalytics: self.storeFinderAnalytics,
          sendAnalyticsData: self.sendAnalyticsData,
          analytics: self.analytics
        });
      });

      beforeEach(module('views/location-input.html'));

      
      beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
      }));

      var htmlContent = '<div class="location-textboxcontainer"> <div class="input-group header-input-group"> <div class="cell form-group location-input-box"> <input type="text" popover-trigger="show" popover-placement="bottom" popover="Please enter a valid UK postcode or City/Town." class="form-control custom-input location-input js-location-input order-input" placeholder="Enter postcode or town"> </div> <div class="cell form-group search-box"> <input type="submit" class="btn submit input-group-btn btn-success btn-lg nav-tracking-text small-device" location-header value="Search"> </div> </div></div> ';
        
      function compileDirective() {
        var element = angular.element(htmlContent);
        element.appendTo(document.body);
        inject(function($compile) {
          elm = $compile(element)($scope);
        });
        // $digest is necessary to finalize the directive generation
        $scope.$digest();
      }

      /* Here comes the testcases */
      
      describe('Location header initialization', function() {
        // before each test in this block, generates a fresh directive
          var submit_btn;
          
          beforeEach(function() {
              compileDirective();
              submit_btn = elm.find('.submit');
          });
          
          it('should have a placeholder', function () {
            expect(elm.find('.form-control.js-location-input').attr('placeholder')).toBe('Enter postcode or town');
          });

          it('should have a popover attribute', function () {
            expect(elm.find('.form-control.js-location-input').attr('popover')).toBe('Please enter a valid UK postcode or City/Town.');
          });
          
          it('should show an error when submitted without location value', function() {
            //elm.find('.form-control.js-location-input').val('HU3 4PE');
            submit_btn.click();
            expect(elm.find('.location-input-box').attr('class')).toContain('has-error');
          });
          
      });
    });
});
