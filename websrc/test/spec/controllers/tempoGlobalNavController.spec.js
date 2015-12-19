define(["app", "controllers/tempoGlobalNavController", "angular", "angular_mocks"], 
  function(App, tempoGlobalNavController, angular, parcelJson) {
    describe('tempoGlobalNavController should assign', function() {
      var mock = angular.mock, scope, tempoService, analytics;
      var data = {                                          // Sample correct Payload instance
        "status": "OK",
        "payload": [
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "socialSection": [],
            "knowUsSection": {
              "uid": "Ur_g9uHm",
              "subSections": [
              {
                "uid": "Moc4nllJ",
                "link": {
                  "uid": "Z_JDGZSV",
                  "linkText": "About us",
                  "title": "About us",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/aboutus"
                  }
                }
              }
              ],
              "title": "Our story"
            },
            "custServiceSections": {
              "uid": "lpR8VEeF",
              "subSections": [
              {
                "uid": "2wVET4nK",
                "link": {
                  "uid": "hrcj9sMF",
                  "linkText": "Help",
                  "title": "Help",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/help"
                  }
                }
              },
              {
                "uid": "ivGk3vj7",
                "link": {
                  "uid": "L_crSikV",
                  "linkText": "Privacy policy",
                  "title": "Privacy policy",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/privacy-policy"
                  }
                }
              }
              ],
              "title": "Find out more"
            },
            "servicesSection": {
              "uid": "LJYtaxrM",
              "subSections": [
              {
                "uid": "T3oNCNDu",
                "link": {
                  "uid": "M1uUZoUe",
                  "linkText": "Our services",
                  "title": "Our services",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/services"
                  }
                }
              },
              {
                "uid": "k0BCONzd",
                "link": {
                  "uid": "jObRyORx",
                  "linkText": "Our locations",
                  "title": "Our locations",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/locations"
                  }
                }
              }
              ],
              "title": "What we offer"
            },
            "copyrightSection": {
              "uid": "UhbieJT8",
              "registrationInfo": "toyou\nKingsway Business Park \nRochdale \nOL16 4NZ",
              "title": "Enquiries"
            },
            "cookiePolicySection": {
              "uid": "Zydm7OqZ",
              "text1": "Â© 2015 Asda Stores Limited trading as toyou | Registered number: Z7545987 | Registered address: | South Bank, | Great Wilson street, Leeds, LS11 5AD | VAT number: GB 362 0127 92. Our site uses cookies. Find out",
              "text2": "are and why we use them. If you continue to use our site, you consent to us using cookies in this way.",
              "link": {
                "uid": "Qvb0tEEK",
                "linkText": "what cookies",
                "title": "what cookies",
                "clickThrough": {
                  "type": "url",
                  "value": "#/privacy-policy#Cookies"
                }
              }
            }
          },
          "module_id": "aff17903-8a30-4609-a443-2da3c1809eac",
          "name": "toYouFooterWeb",
          "publishedDate": 1438256007688,
          "type": "GlobalFooter",
          "triggers": [
          {
            "pageType": "global_nav",
            "zone": "footerMainZone",
            "pageId": null
          }
          ],
          "version": 6,
          "status": "published"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "links": [
            {
              "uid": "coubxFIs",
              "link": {
                "uid": "_-1uD5Nv",
                "clickThrough": {
                  "type": "url",
                  "value": "#/home"
                }
              },
              "displaySeparator": "false",
              "title": "Track Parcel"
            },
            {
              "uid": "QSsxu-ng",
              "link": {
                "uid": "RlEkYpp7",
                "clickThrough": {
                  "type": "url",
                  "value": "#/locations"
                }
              },
              "displaySeparator": "false",
              "title": "Locations"
            },
            {
              "uid": "MP8xyBk6",
              "link": {
                "uid": "geSVa2Z7",
                "clickThrough": {
                  "type": "url",
                  "value": "line"
                }
              },
              "displaySeparator": "false",
              "title": "line"
            },
            {
              "uid": "0YZYDQFC",
              "link": {
                "uid": "K5WLyFZg",
                "clickThrough": {
                  "type": "url",
                  "value": "#/services"
                }
              },
              "displaySeparator": "false",
              "title": "Services"
            },
            {
              "uid": "NpJFAiBK",
              "link": {
                "uid": "4ggx11nl",
                "clickThrough": {
                  "type": "url",
                  "value": "#/aboutus"
                }
              },
              "displaySeparator": "false",
              "title": "About us"
            }
            ]
          },
          "module_id": "893b7d0f-9b3a-4e03-ad8b-47fc44fe0e5c",
          "name": "toYouHeaderMobile",
          "publishedDate": 1438258615953,
          "type": "GlobalHeader",
          "triggers": [
          {
            "pageType": "global_nav",
            "zone": "mobileNavZone",
            "pageId": null
          }
          ],
          "version": 3,
          "status": "published"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "links": [
            {
              "uid": "X5CTKqHh",
              "link": {
                "uid": "RxV3hYGD",
                "clickThrough": {
                  "type": "url",
                  "value": "#/aboutus"
                }
              },
              "displaySeparator": "false",
              "title": "About us"
            },
            {
              "uid": "PLFufKev",
              "link": {
                "uid": "2oRXQ0AG",
                "clickThrough": {
                  "type": "url",
                  "value": "#/services"
                }
              },
              "displaySeparator": "false",
              "title": "Our services"
            },
            {
              "uid": "CGp6OnwV",
              "link": {
                "uid": "LCXo7ms9",
                "clickThrough": {
                  "type": "url",
                  "value": "#/locations"
                }
              },
              "displaySeparator": "false",
              "title": "Our locations"
            },
            {
              "uid": "ShJrEmGZ",
              "link": {
                "uid": "Fgci-JFq",
                "clickThrough": {
                  "type": "url",
                  "value": "#/help"
                }
              },
              "displaySeparator": "false",
              "title": "Help"
            }
            ]
          },
          "module_id": "4475ddc3-5d35-4db5-95ef-9efcaceff1bd",
          "name": "toYouHeaderWeb",
          "publishedDate": 1434430424467,
          "type": "GlobalHeader",
          "triggers": [
          {
            "pageType": "global_nav",
            "zone": "navZone",
            "pageId": null
          }
          ],
          "version": 3,
          "status": "published"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "link": {
              "uid": "igLs-8Mp",
              "linkText": "Click here to know more",
              "title": "click here",
              "clickThrough": {
                "type": "url",
                "value": "servicedisruption"
              }
            },
            "message": null
          },
          "module_id": "76f43ee6-c028-44b2-b312-165eb9ea04ac",
          "name": "toyou-generaladvisory",
          "publishedDate": 1438168885732,
          "type": "GlobalAdvisoryMessages",
          "triggers": [
          {
            "pageType": "global_nav",
            "zone": "messageZone",
            "pageId": null
          }
          ],
          "version": 3,
          "status": "published"
        }
        ]
      }
      //*********************************************
      data_no_payload = {                                             // Sample empty Payload instance
        "status": "OK",
        "payload": []
      }
      //*********************************************
      data_no_config = {                                              // Sample payload with no config block for the footer section
        "status": "OK",
        "payload": [
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          
          "module_id": "aff17903-8a30-4609-a443-2da3c1809eac",
          "name": "toYouFooterWeb",
          "publishedDate": 1438256007688,
          "type": "GlobalFooter",
          "triggers": [
          {
            "pageType": "global_nav",
            "zone": "footerMainZone",
            "pageId": null
          }
          ],
          "version": 6,
          "status": "published"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "module_id": "893b7d0f-9b3a-4e03-ad8b-47fc44fe0e5c",
          "name": "toYouHeaderMobile",
          "publishedDate": 1438258615953,
          "type": "GlobalHeader",
          "triggers": [
          {
            "pageType": "global_nav",
            "zone": "mobileNavZone",
            "pageId": null
          }
          ],
          "version": 3,
          "status": "published"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "module_id": "4475ddc3-5d35-4db5-95ef-9efcaceff1bd",
          "name": "toYouHeaderWeb",
          "publishedDate": 1434430424467,
          "type": "GlobalHeader",
          "triggers": [
          {
            "pageType": "global_nav",
            "zone": "navZone",
            "pageId": null
          }
          ],
          "version": 3,
          "status": "published"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "link": {
              "uid": "igLs-8Mp",
              "linkText": "Click here to know more",
              "title": "click here",
              "clickThrough": {
                "type": "url",
                "value": "servicedisruption"
              }
            },
            "message": null
          },
          "module_id": "76f43ee6-c028-44b2-b312-165eb9ea04ac",
          "name": "toyou-generaladvisory",
          "publishedDate": 1438168885732,
          "type": "GlobalAdvisoryMessages",
          "triggers": [
          {
            "pageType": "global_nav",
            "zone": "messageZone",
            "pageId": null
          }
          ],
          "version": 3,
          "status": "published"
        }
        ]
      }
      //*******************************************
      var data_no_trigger = {                                    // Sample Payload instance without the trigger block
        "status": "OK",
        "payload": [
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "socialSection": [],
            "knowUsSection": {
              "uid": "Ur_g9uHm",
              "subSections": [
              {
                "uid": "Moc4nllJ",
                "link": {
                  "uid": "Z_JDGZSV",
                  "linkText": "About us",
                  "title": "About us",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/aboutus"
                  }
                }
              }
              ],
              "title": "Our story"
            },
            "custServiceSections": {
              "uid": "lpR8VEeF",
              "subSections": [
              {
                "uid": "2wVET4nK",
                "link": {
                  "uid": "hrcj9sMF",
                  "linkText": "Help",
                  "title": "Help",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/help"
                  }
                }
              },
              {
                "uid": "ivGk3vj7",
                "link": {
                  "uid": "L_crSikV",
                  "linkText": "Privacy policy",
                  "title": "Privacy policy",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/privacy-policy"
                  }
                }
              }
              ],
              "title": "Find out more"
            },
            "servicesSection": {
              "uid": "LJYtaxrM",
              "subSections": [
              {
                "uid": "T3oNCNDu",
                "link": {
                  "uid": "M1uUZoUe",
                  "linkText": "Our services",
                  "title": "Our services",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/services"
                  }
                }
              },
              {
                "uid": "k0BCONzd",
                "link": {
                  "uid": "jObRyORx",
                  "linkText": "Our locations",
                  "title": "Our locations",
                  "clickThrough": {
                    "type": "url",
                    "value": "#/locations"
                  }
                }
              }
              ],
              "title": "What we offer"
            },
            "copyrightSection": {
              "uid": "UhbieJT8",
              "registrationInfo": "toyou\nKingsway Business Park \nRochdale \nOL16 4NZ",
              "title": "Enquiries"
            },
            "cookiePolicySection": {
              "uid": "Zydm7OqZ",
              "text1": "Â© 2015 Asda Stores Limited trading as toyou | Registered number: Z7545987 | Registered address: | South Bank, | Great Wilson street, Leeds, LS11 5AD | VAT number: GB 362 0127 92. Our site uses cookies. Find out",
              "text2": "are and why we use them. If you continue to use our site, you consent to us using cookies in this way.",
              "link": {
                "uid": "Qvb0tEEK",
                "linkText": "what cookies",
                "title": "what cookies",
                "clickThrough": {
                  "type": "url",
                  "value": "#/privacy-policy#Cookies"
                }
              }
            }
          },
          "module_id": "aff17903-8a30-4609-a443-2da3c1809eac",
          "name": "toYouFooterWeb",
          "publishedDate": 1438256007688,
          "type": "GlobalFooter",

          "version": 6,
          "status": "published"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "links": [
            {
              "uid": "coubxFIs",
              "link": {
                "uid": "_-1uD5Nv",
                "clickThrough": {
                  "type": "url",
                  "value": "#/home"
                }
              },
              "displaySeparator": "false",
              "title": "Track Parcel"
            },
            {
              "uid": "QSsxu-ng",
              "link": {
                "uid": "RlEkYpp7",
                "clickThrough": {
                  "type": "url",
                  "value": "#/locations"
                }
              },
              "displaySeparator": "false",
              "title": "Locations"
            },
            {
              "uid": "MP8xyBk6",
              "link": {
                "uid": "geSVa2Z7",
                "clickThrough": {
                  "type": "url",
                  "value": "line"
                }
              },
              "displaySeparator": "false",
              "title": "line"
            },
            {
              "uid": "0YZYDQFC",
              "link": {
                "uid": "K5WLyFZg",
                "clickThrough": {
                  "type": "url",
                  "value": "#/services"
                }
              },
              "displaySeparator": "false",
              "title": "Services"
            },
            {
              "uid": "NpJFAiBK",
              "link": {
                "uid": "4ggx11nl",
                "clickThrough": {
                  "type": "url",
                  "value": "#/aboutus"
                }
              },
              "displaySeparator": "false",
              "title": "About us"
            }
            ]
          },
          "module_id": "893b7d0f-9b3a-4e03-ad8b-47fc44fe0e5c",
          "name": "toYouHeaderMobile",
          "publishedDate": 1438258615953,
          "type": "GlobalHeader",
          "version": 3,
          "status": "published"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "links": [
            {
              "uid": "X5CTKqHh",
              "link": {
                "uid": "RxV3hYGD",
                "clickThrough": {
                  "type": "url",
                  "value": "#/aboutus"
                }
              },
              "displaySeparator": "false",
              "title": "About us"
            },
            {
              "uid": "PLFufKev",
              "link": {
                "uid": "2oRXQ0AG",
                "clickThrough": {
                  "type": "url",
                  "value": "#/services"
                }
              },
              "displaySeparator": "false",
              "title": "Our services"
            },
            {
              "uid": "CGp6OnwV",
              "link": {
                "uid": "LCXo7ms9",
                "clickThrough": {
                  "type": "url",
                  "value": "#/locations"
                }
              },
              "displaySeparator": "false",
              "title": "Our locations"
            },
            {
              "uid": "ShJrEmGZ",
              "link": {
                "uid": "Fgci-JFq",
                "clickThrough": {
                  "type": "url",
                  "value": "#/help"
                }
              },
              "displaySeparator": "false",
              "title": "Help"
            }
            ]
          },
          "module_id": "4475ddc3-5d35-4db5-95ef-9efcaceff1bd",
          "name": "toYouHeaderWeb",
          "publishedDate": 1434430424467,
          "type": "GlobalHeader",
          "version": 3,
          "status": "published"
        },
        {
          "schedule": {
            "start": null,
            "end": null,
            "priority": 1,
            "expEnabled": false
          },
          "configs": {
            "link": {
              "uid": "igLs-8Mp",
              "linkText": "Click here to know more",
              "title": "click here",
              "clickThrough": {
                "type": "url",
                "value": "servicedisruption"
              }
            },
            "message": null
          },
          "module_id": "76f43ee6-c028-44b2-b312-165eb9ea04ac",
          "name": "toyou-generaladvisory",
          "publishedDate": 1438168885732,
          "type": "GlobalAdvisoryMessages",
          "version": 3,
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
        mock.inject(function($controller, $rootScope) {
          scope = $rootScope.$new();
          ctrl = $controller(tempoGlobalNavController, {                                    // controller declaration
            "$scope": scope,
            "tempoService":tempoService,
            "analytics":analytics
          });
        })
        return ctrl;
      }
      //***************************************************** 
      describe('footer variable ', function() {
        
        var i ;
        
        for ( i=0 ; i < data.payload.length ; i++ ) {                                       // finding the footer payload
          if ( data.payload[i].triggers[0].zone === "footerMainZone") {
            break;
          }
        }
        // Footer UT
        it('footerConfig to be assigned correctly', function() {
          expect(controller(data).footerConfig).toBe(data.payload[i].configs);              // comparing the footer payload in case of right payload
        });

        it('footerConfig to be undefined in case of null payload',function(){
          expect(controller(data_no_payload).footerConfig).toBeNull();                 // should be undefined for the case of erronious payload block
        })

        it('footerConfig to be undefined in case of no configs',function(){
          expect(controller(data_no_config).footerConfig).toBeNull();                  // should be undefined for the case of erronious config block
        })

        it('footerConfig to be undefined in case of wrong triggers value',function(){   
          expect(controller(data_no_trigger).footerConfig).toBeNull();                 // should be undefined for the case of erronious trigger block
        })
      
      });
      //***************************************************** 
      describe('header variable ', function() {
        
        var j;
        
        for ( j=0 ; j < data.payload.length ; j++ ) {                                       // finding the footer payload
          if ( data.payload[j].triggers[0].zone === "navZone") {
            break;
          }
        }
        it('webConfigLinks to be undefined in case of wrong triggers value',function(){   
          expect(controller(data).webConfigLinks).toBe(data.payload[j].configs.links);                 // 
        })
        it('webConfigLinks to be undefined in case of null payload',function(){
          expect(controller(data_no_payload).webConfigLinks).toBeNull();                 // should be undefined for the case of erronious payload block
        })

        it('webConfigLinks to be undefined in case of no configs',function(){
          expect(controller(data_no_config).webConfigLinks).toBeNull();                  // should be undefined for the case of erronious config block
        })

        it('webConfigLinks to be undefined in case of wrong triggers value',function(){   
          expect(controller(data_no_trigger).webConfigLinks).toBeNull();                 // should be undefined for the case of erronious trigger block
        })
      
      });
      //***************************************************** 
      describe('mobile header variable ', function() {
        
        var k;

        for ( k=0 ; k < data.payload.length ; k++ ) {                                       // finding the footer payload
          if ( data.payload[k].triggers[0].zone === "mobileNavZone") {
            break;
          }
        }
        it('mobileConfigLinks to be undefined in case of wrong triggers value',function(){   
          expect(controller(data).mobileConfigLinks).toBe(data.payload[k].configs.links);                 // 
        })
        it('mobileConfigLinks to be undefined in case of null payload',function(){
          expect(controller(data_no_payload).mobileConfigLinks).toBeNull();                 // should be undefined for the case of erronious payload block
        })

        it('mobileConfigLinks to be undefined in case of no configs',function(){
          expect(controller(data_no_config).mobileConfigLinks).toBeNull();                  // should be undefined for the case of erronious config block
        })

        it('mobileConfigLinks to be undefined in case of wrong triggers value',function(){   
          expect(controller(data_no_trigger).mobileConfigLinks).toBeNull();                 // should be undefined for the case of erronious trigger block
        })

      });

    });
});
