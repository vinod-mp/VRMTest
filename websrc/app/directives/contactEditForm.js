define([], function(){
  var contactEditForm = function($rootScope, utilityFactory) {
    return {
      link: function($scope, element) {
            console.log("element ", element);
                   
            var self = this, contactList;
            contactList = utilityFactory.singersData();        
            self.contacts = contactList;

            var contactId;

            contactId = $rootScope.selectedContactId;

            console.log(" $rootScope.selectedContactId contactId ", contactId);

            var editableContactObj = utilityFactory.getContoact(contactId);

            if(editableContactObj.length == 1) {
                editableContactObj = editableContactObj[0];
                console.log("editableContactObj ", editableContactObj);
                console.log("editableContactObj.name ", editableContactObj.name);
                console.log("$(.contact-modal-body #cname) ", $(".contact-modal-body #cname"));
                $(".contact-modal-body #cname").val(editableContactObj.name);
                $(".contact-modal-body #phone").val(editableContactObj.phone);
                $(".contact-modal-body #email").val(editableContactObj.email);
            }

      },
    };
  };

  contactEditForm.$inject = ["$rootScope", "utilityFactory"];

  return contactEditForm;
});
