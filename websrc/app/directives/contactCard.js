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
            
              $scope.$on("editContactLstnr", function(response) {
                console.log("Inside listener");
              });


            $scope.editContact = function() {
                console.log("Element ", $scope.contactId);
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
              /*
              scope.editContact = function() {
                console.log("Element ", $(this));
                console.log("Contact id ", $attr.contactId);
                          
                $scope.open = function () {
                    $modal.open({
                      animation: $scope.animationsEnabled,
                      templateUrl: 'confirmCreateLabel',
                      controller: 'createLabelDialogController'
                    });
                };
                  
              }*/
              scope.deleteContact = function() {
                alert("delete contact");   
              }
          }
      };
  };
  
  contactCard.$inject = ["$modal", "$rootScope", "utilityFactory"];
  return contactCard;
    
});
