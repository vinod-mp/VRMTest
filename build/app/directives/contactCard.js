define(function(){
  var contactCard = function ($modal, $rootScope, utilityFactory) {
      return {
          templateUrl: "views/contactcard.html",
          scope: {
            contactId: "@contactId"   ,
            editContact: "&",
            deleteContact: "&"
          },
          controller: function($scope) {

            $scope.editContact = function() {
                console.log("Element ", $scope.contactId);
                $rootScope.$broadcast("editContactId", $scope.contactId);
            };
              
            $scope.deleteContact = function() {
                console.log("deleting contact"); 
                $rootScope.$broadcast("deleteContactId", $scope.contactId);
            }
          },
          link: function(scope, element, $attr) {
             var contacts = utilityFactory.singersData(), contactIdEle, 
                 contactId, contactNameEle;
              
              contactId = parseInt($attr.contactId) - 1;
              
              contactNameEle = $(element).find(".contact-name");
              contactPicture = $(element).find(".contact-picture");
              contactEmail = $(element).find(".contact-email");
              contactPhone = $(element).find(".contact-phone");
              
              contactNameEle.html(contacts[contactId].name);
              contactPicture.attr("src", contacts[contactId].picture);
              contactEmail.html(contacts[contactId].email);
              contactPhone.html(contacts[contactId].phone);

          }
      };
  };
  
  contactCard.$inject = ["$modal", "$rootScope", "utilityFactory"];
  return contactCard;
    
});
