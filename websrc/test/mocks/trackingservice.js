angular.module('mock.trackService', []).
    factory('trackService', function($q) {
        var trackService = {};
 
        trackService.get = function() {
            return {
                id: 8888,
                name: "test user"
            }
        };
        
        // example stub method that returns a promise, e.g. if original method returned $http.get(...)
        trackService.fetch = function() {
            var mocktrackService = {
                id: 8888,
                name: "test user"
            };
            return $q.when(mocktrackService);
        };
 
        // other stubbed methods
        
        return trackService;
    });
