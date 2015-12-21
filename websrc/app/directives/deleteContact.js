define([], function(){
  var deleteContact = function($rootScope, utilityFactory) {
    return {
      link: function($scope, element) {
            console.log("element ", element);
                   
            var self = this, contactList;
            contactList = utilityFactory.singersData();        
            self.contacts = contactList;

            var contactId;

            contactId = $rootScope.selectedContactId;

            console.log(" $rootScope.selectedContactId contactId ", contactId);

            var deletableContactObj = $.grep(contactList, function(e){ return e.id == contactId; });

            if(deletableContactObj.length == 1) {
                deletableContactObj = deletableContactObj[0];
                console.log("$(.contact-modal-body #contact-pictureid) ", $(".contact-modal-body #contact-pictureid"));
                $(".contact-modal-body #contact-pictureid").attr("src", deletableContactObj.picture);
                $(".contact-modal-body #contact-nameId").html(deletableContactObj.name);
            }

      },
    };
  };

  deleteContact.$inject = ["$rootScope", "utilityFactory"];

  return deleteContact;
});
