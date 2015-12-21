

/*
 * Define all utility methods here so that it could
 * be consumed by the project
*/ 

define([], function(){
  var utilityFactory = function($rootScope) {
      
    return {

      getIndexOfContact: function(contactId) {
          
          indexes = $.map(this.singersObj, function(contactObj, index) {
                if(contactObj.id == contactId) {
                    return index;
                }
          })

          return indexes;
          
      },
        
      setContact: function(contactId, contactObj) {
          console.log("setcontact contactObj ", contactObj);
          var indexes = this.getIndexOfContact(contactId);
          console.log("indexes ", indexes);
          console.log("this.singersObj indexes ", this.singersObj[indexes]);
          this.singersObj[indexes].email = contactObj.email;
          this.singersObj[indexes].phone = contactObj.phone;
          this.singersObj[indexes].name = contactObj.name;
          console.log("this.singersObj after set contact ", this.singersObj);
          this.updateCard(contactId, contactObj);
      },
        
      updateCard: function(contactId, contactObj){ 
            var contactBoxEle = $(".contact-card-box[contact-id='" + contactId + "']");
            
            $(contactBoxEle).find(".contact-name").html(contactObj.name);
            $(contactBoxEle).find(".contact-email").html(contactObj.email);
            $(contactBoxEle).find(".contact-phone").html(contactObj.phone);
      },
        
      getContoact: function(contactId) {
            console.log("this.singersObj ", this.singersObj);
            var contactObj = $.grep(this.singersObj, function(e){ return e.id == contactId; });
            return contactObj;
      },
      
      deleteContact: function(contactId) {
            var index = this.getIndexOfContact(contactId);
            console.log("index of element delete ", index);
            this.singersObj.splice(index, 1);
            var contactBoxEle = $(".contact-card-box[contact-id='" + contactId + "']");
            contactBoxEle.remove();
            return true;
      },
        
      singersData: function() {
        $rootScope.singersObj = [
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
      
        return this.singersObj;
    },
    refreshContacts: function(contactId) {  
      var html = $(".contacts-list").html();
      $('.contacts-list').html(html); 
      console.log("Refreshed contacts ",contactId );
      console.log();
    }
  };
  }

  utilityFactory.$inject = ["$rootScope"];
  return utilityFactory;
});
