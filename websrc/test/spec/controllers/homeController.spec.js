define(["app", "controllers/homeController", "angular", "angular_mocks"], 
  function(App, homeController, angular, parcelJson) {
    describe('homeController should assign', function() {
      var mock = angular.mock, scope, tempoService, analytics;
      var data = {
        "status": "OK",
        "payload": [
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 10,
            "expEnabled": false
          },
          "configs": {
            "autoRotation": "off",
            "arrowColor": "white",
            "story": [
            {
              "uid": "7QI_Ixxb",
              "mainImage": {
                "uid": "5flJdYKt",
                "size": "254507",
                "src": "https://i.toyou-assets.co.uk/dfwrs/b6fb47af-21/k2-_64d2528e-2cc4-4f17-aca6-96853cfe0279.v1.jpg",
                "assetId": "2fe8a830-3205-11e5-b86c-59e5a2320475",
                "alt": "Image text",
                "width": "750",
                "assetName": "Homepage Lifestyle 1",
                "title": "Main text",
                "clickThrough": {
                  "type": "url",
                  "value": "http://toyou.dev.walmart.com/#/home"
                },
                "contentType": "image/jpeg",
                "height": "445"
              },
              "overlays": []
            },
            {
              "uid": "Q8lvQbVH",
              "mainImage": {
                "uid": "XGjGwgAg",
                "size": "668296",
                "src": "https://i.toyou-assets.co.uk/dfwrs/b6fb47af-48/k2-_9a05f169-22a5-4aa2-9ff2-b968ec6ea20b.v1.png",
                "assetId": "49077940-3205-11e5-b86c-59e5a2320475",
                "alt": "def",
                "width": "750",
                "assetName": "ToYou_FilmStills_750x445_00011.png",
                "title": "abc",
                "clickThrough": {
                  "type": "url",
                  "value": "http://toyou.dev.walmart.com/#/home"
                },
                "contentType": "image/png",
                "height": "445"
              },
              "overlays": [
              {
                "uid": "hBKP_sRL",
                "ycoordinate": "20",
                "defaultColor": "#fff",
                "hexCode": null,
                "message": "The service that delivers, <br> <b>whenever</b> it suits you",
                "alignment": "left",
                "xcoordinate": "50"
              }
              ]
            },
            {
              "uid": "zLTadCH3",
              "mainImage": {
                "uid": "9vY240iC",
                "size": "539608",
                "src": "https://i.toyou-assets.co.uk/dfwrs/b6fb47af-91/k2-_3bd21d4c-1d20-49ad-8346-6ea9e01124e7.v1.png",
                "assetId": "d4e5e170-3153-11e5-b86c-59e5a2320475",
                "alt": "A delivery service for your busy life",
                "width": "750",
                "assetName": "Homepage Mill Teaser.png",
                "title": "A delivery service for your busy life",
                "clickThrough": {
                  "type": "url",
                  "value": "http://toyou.dev.walmart.com/#/home"
                },
                "contentType": "image/png",
                "height": "445"
              },
              "overlays": []
            }
            ]
          },
          "module_id": "678f71a8-f3ad-4b0c-9102-cee9b69d9e44",
          "name": "HomepageBannerTest1",
          "publishedDate": 1441102904325,
          "type": "HeroBanner",
          "triggers": [
          {
            "pageType": "homepage",
            "zone": "contentZone1",
            "pageId": null
          }
          ],
          "version": 17,
          "status": "published_revised"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "css": [],
            "markup": "\"<b>your</b> parcel, <br />\n<b>your</b> way\"",
            "js": []
          },
          "module_id": "d48a2868-be22-4278-8dd5-93364574e801",
          "name": "Testimonials010915",
          "publishedDate": 1441094410398,
          "type": "CustomHTML",
          "triggers": [
          {
            "pageType": "homepage",
            "zone": "contentZone2",
            "pageId": null
          }
          ],
          "version": 1,
          "status": "published"
        }
        ]
      }
      //******************************************************
      // function for getting the mock controller instance
      var controller = function(input){                                                   // create mock objects for the controller dependencies
        var ctrl;
        analytics = {
          addDataAndSendBeaconWithBcqData: function() {}
        };
        tempoService = {                                    
          query: function(args, callback) {
            if (typeof callback === "function") {
              callback(input);
            }
          }
        };
        utilityFactory = {};
        mock.inject(function($controller, $rootScope) {
          scope = $rootScope.$new();
          ctrl = $controller(homeController, {                                    // controller declaration
            "$scope": scope,
            "tempoService":tempoService,
            "utilityFactory":utilityFactory,
            "analytics":analytics
          });
        })
        return ctrl;
      }
      //***************************************************** 
      describe('homepage variable ', function() {

        var j;
        for ( j=0 ; j < data.payload.length ; j++ ) {                                       
          if ( data.payload[j].triggers[0].zone === "contentZone1") {
            break;
          }
        }
        it('videoModule correctly', function() {
          var vidModule = false;
          if(data.payload[j].type !== "HeroBanner"){
            vidModule = true;
          }
          expect(controller(data).videoModule).toBe(vidModule);             
        });
        it('bannerData correctly', function() {
          expect(controller(data).bannerData).toBe(data.payload[j]);              
        });
        it('markUp correctly', function() {
          var markupData = "";
          if(data.payload[j].type !== "HeroBanner"){
            markupData = data.payload[j].configs.markup;
          }
          expect(controller(data).markUp).toBe(markupData);              
        });

        var k;
        for ( k=0 ; k < data.payload.length ; k++ ) {                                       
          if ( data.payload[k].triggers[0].zone === "contentZone2") {
            break;
          }
        }

        it('testimonialData correctly', function() {
          expect(controller(data).testimonialData).toBe(data.payload[k].configs);              
        });

      });

    });
});
