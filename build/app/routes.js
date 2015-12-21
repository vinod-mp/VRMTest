
define(['app'], function(app) {

app.config(
  ['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider
        .when('/', '/')
        .otherwise('/interim');
  
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
            'content@': {
                templateUrl: 'views/home.html'
            }
        }
      })
      /* If there is change in the below state url/name, 
      please ensuere to change in appHeader directive also. */
      .state('interim', {
        url: '/interim',
        views: {
          'content@': {
            templateUrl: 'views/interim.html'
          }
        }
      });
      $locationProvider.html5Mode(true);
    }

  ]);

});

