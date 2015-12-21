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
                $rootScope.$broadcast("editContactId", $scope.contactId);
            };
              
            $scope.deleteContact = function() {
                $rootScope.$broadcast("deleteContactId", $scope.contactId);
            }
          },
          
          link: function(scope, element, $attr) {
             var contacts =  $rootScope.singersObj, contactIdEle, 
                 contactId, contactNameEle, contactPicture, contactEmail, contactPhone;
              
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
