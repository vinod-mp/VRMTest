define(["app", "controllers/trackerController", "angular", "angular_mocks"], 
  function(App, trackerController, angular, parcelJson) {

    describe('Unit: TrackerController', function() {

      var ctrl, mock = angular.mock, $scope, queryDeferred;

      //TODO - Move this data to some other location
      var data = {
        "status":"OK",
        "errors":[],
        "payload":
          [{
            "orderNumber":"OTD20150403",
            "orderType":"B2C",
            "parcelId":"LRN2015040103",
            "visualLegStatuses":
              [
                {
                  "stepNo":"1",
                  "description":"Arrived at national depot",
                  "visualState":"ENABLED",
                  "parcelLocation":"NSC"
                },{
                  "stepNo":"2",
                  "description":"On its way to your local depot",
                  "visualState":"ENABLED",
                  "parcelLocation":"IN_TRANSIT"
                },{
                  "stepNo":"3",
                  "description":"Arrived at your local depot",
                  "visualState":"ENABLED",
                  "parcelLocation":"LSC"
                },{
                  "stepNo":"4",
                  "description":"On its way to your collection point",
                  "visualState":"ENABLED_DELAYED",
                  "parcelLocation":"IN_TRANSIT"
                },{
                  "stepNo":"5",
                  "description":"Arrived at your toyou location",
                  "visualState":"DISABLED",
                  "parcelLocation":"SUPERSTORE"
                },{
                  "stepNo":"6",
                  "description":"Parcel ready for collection",
                  "visualState":"DISABLED",
                  "parcelLocation":"SUPERSTORE"
                }
              ],
            "currentStatusDetails":{
              "description":"Your parcel may be delayed, but we are working hard to resolve this",
              "stepNo":4,
              "statusMessage":"Please wait for further updates before collecting your parcel",
              "status":"DELAYED"
            },
            "customerDetails":
              [
                {
                  "message":"Your parcel has been received at our national depot",
                  "dateAndTime":"21 Dec 2014 10:52:13"
                },{
                  "message":"Your parcel is on its way to your local depot",
                  "dateAndTime":"21 Dec 2014 12:12:00"
                },{
                  "message":"Your parcel has arrived at your local depot",
                  "dateAndTime":"21 Dec 2014 13:10:13"
                },{
                  "message":"Your parcel is on its way to your chosen collection location",
                  "dateAndTime":"21 Dec 2014 13:59:11"
                }
              ],
            "storeDetail":{
              "facilityId":"4126"
            },
            "ClientID":"123"
          }]
      };

      beforeEach(mock.inject(function($controller, $rootScope, $location, $sce, $timeout, $q) {
        $scope = $rootScope.$new();

        var mockOrderService = {},
          mockParcelService = {
            query: function(args, callback) {
              callback(data);
            }
          },
          mockTrackInterface = {},
          analytics = {},
          applicationContext = {
            "trackerRequest": false
          },
          mockFacilityService = {
            query: function(){}
          },
          mockUtilityFactory = {
            formatTextToyou: function() {},
            formateDate: function() {},
            isDefined: function() {}
          },
          mockB2cClientService = {},
          errorHandler = {},
          errorMessageMap = {
            getMessage:function(){}
          };

        ctrl = $controller(trackerController, {
          "orderService": mockOrderService,
          "parcelService": mockParcelService,
          "trackInterface": mockTrackInterface,
          "facilityService": mockFacilityService,
          "utilityFactory": mockUtilityFactory,
          "locatoin": $location,
          "b2cClientService": mockB2cClientService,
          "errorHandler": errorHandler, 
          "errorMessageMap": errorMessageMap, 
          "sce": $sce, 
          "timeout": $timeout,
          "analytics": analytics,
          "$q": $q,
          "$rootScope":$rootScope,
          "applicationContext": applicationContext
        });

      }));

      it('legs should be length of 5', function() {
        var payload = data.payload[0], points;
        points = ctrl.getPoint(payload.visualLegStatuses, payload.currentStatusDetails);
        expect(points.length).toBe(5);
      });

      it('legs should return null', function() {
        var payload = data.payload[0], points;
        points = ctrl.getPoint(false, payload.currentStatusDetails);
        expect(points).toBe(null);
      });

      it('legs should return null', function() {
        var payload = data.payload[0], points;
        points = ctrl.getPoint(payload.visualLegStatuses, payload.currentStatusDetails);
        expect(points.currentState).toFalsy;
      });

    });

});
