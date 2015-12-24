

/*
 * Define all utility methods here so that it could
 * be consumed by the project
*/ 

define([], function(){
  var utilityFactory = function($rootScope) {
      
    return {
        
      getSingersData: function() {
        singersData = [];
      
        return singersData;
    }
  };
  }

  utilityFactory.$inject = ["$rootScope"];
  return utilityFactory;
});
