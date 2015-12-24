

/*
 * Define all utility methods here so that it could
 * be consumed by the project
*/ 

define([], function(){
  var utilityFactory = function($rootScope) {
      
    return {
        
      getSingersData: function() {
        singersData = [
        {
            id: 1,
            name: "S. P. Balasubrahmanyam",
            phone: "+91-123 456 666",
            email: "SPBalasubrahmanyam@singer.com",
            picture: "assets/spbalu.jpg"
        },
        {
            id: 2,
            name: "Mika Singh",
            phone: "+91-123 456 780",
            email: "MikaSingh@singer.com",
            picture: "assets/mika_singer.jpg"
        },
        {
            id: 3,
            name: "Shankar Mahadevan",
            phone: "+91-123 456 777",
            email: "ShankarMahadevan@singer.com",
            picture: "assets/shankar_singer.jpg"
        },
        {
            id: 4,
            name: "Lata Mangeshkar",
            phone: "+91-123 456 888",
            email: "LataMangeshkar@singer.com",
            picture: "assets/Lata_Mangeshkar_singer.jpg"
        },
        {
            id: 5,
            name: "Atif Aslam",
            phone: "+91-123 456 555",
            email: "AtifAslam@singer.com",
            picture: "assets/AtifAslam_Singer.jpg"
        },
        {
            id: 6,
            name: "Sunidhi Chauhan",
            phone: "+91-123 456 111",
            email: "SunidhiChauhan@singer.com",
            picture: "assets/Sunidhi_singer.jpg"
        },
        {
            id: 7,
            name: "Sonu Nigam",
            phone: "+91-123 456 123",
            email: "SonuNigam@singer.com",
            picture: "assets/sonu_singer.jpg"
        },
        {
            id: 8,
            name: "K. S. Chithra",
            phone: "+91-123 456 135",
            email: "KSChithra@singer.com",
            picture: "assets/chitraks_singer.jpg"
        },
        {
            id: 9,
            name: "Krishnakumar Kunnath",
            phone: "+91-123 456 157",
            email: "kk@singer.com",
            picture: "assets/kk_singer.jpg"
        },
        {
            id: 10,
            name: "Ash King",
            phone: "+91-123 456 179",
            email: "AshKing@singer.com",
            picture: "assets/ashking_singer.jpg"
        }];
      
        return singersData;
    }
  };
  }

  utilityFactory.$inject = ["$rootScope"];
  return utilityFactory;
});
