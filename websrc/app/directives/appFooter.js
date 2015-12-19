define(function(){
  var appFooter = function($location) {
    return {
      link: function ($scope) {
      
      },
      templateUrl: 'views/footer.html'
    };
  };

  appFooter.$inject = ["$location"];

  return appFooter;
});
