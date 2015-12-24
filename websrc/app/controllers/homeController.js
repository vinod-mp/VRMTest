define([], function() {
    var homeController = function($scope, $modal, $rootScope, utilityFactory) {
       
        $scope.contacts = [];
        $scope.init = function() {       
            $scope.contacts = utilityFactory.getSingersData();
        }
        $scope.init();
        
        $scope.addContact = function() {

            var modalInstance = $modal.open({
              animation: $scope.animationsEnabled,
              templateUrl: "addContact.html",
              controller: "addContactController",
              resolve: {
                  newContactId : function() {
                      newId = $scope.contacts.length + 1;
                      return newId;
                  }
              }
            });
        }

        $rootScope.$on("addedContact", function(event, contactObj) {
            console.log("addedContact contactObj : ", contactObj);
            $scope.contacts.push(contactObj);    
        });
            
        var editContactObj = {};
        $scope.editContact = function(contactid) {
            
            var modalInstance = $modal.open({
              animation: $scope.animationsEnabled,
              templateUrl: "editContact.html",
              controller: "editContactController",
              resolve: {
                  editingContactObj: function() {
                      editContactObj = getContactObjById(contactid);
                      return editContactObj;
                  }
              }
            });
        }
        
        $rootScope.$on("deletedContact", function(event, contactId) {
            deleteContactFromContacts(contactId);
        });
        
        var deleteContactFromContacts  =  function(contactId) {
            console.log("Deleting contact id is ", contactId);
            for(i in $scope.contacts) {
                if($scope.contacts[i].id == contactId) {
                    $scope.contacts.splice(i,1);
                }
            }     
        }
        
        $scope.deleteContactFromContacts = deleteContactFromContacts;
        
        $scope.cancel = function() {
             $modalInstance.dismiss('cancel');
        }
         
        var deleteContactObj = {}, deletingContactId;
        
        $scope.deleteContact = function(contactid) {
            deletingContactId = contactid;
            var modalInstance = $modal.open({
              animation: $scope.animationsEnabled,
              templateUrl: "deleteContact.html",
              controller: "deleteContactController",
              resolve: {
                  deletingContactObj: function() {
                      deleteContactObj = getContactObjById(contactid);
                      return deleteContactObj;
                  }
              }
            });
        }
        
        function getContactObjById(id) {
            for(i in $scope.contacts) {
                if($scope.contacts[i].id == id) {
                    return $scope.contacts[i];
                }
            }   
        }
        
        $scope.getContactObjById = getContactObjById;
        
        function updateContact(id, name, phone, email) {
            var contact = getContactObjById(id);
            contact.name = name;
            contact.email = email;
            contact.phone = phone;
            $scope.newcontact = angular.copy(contact);
            $scope.contacts[i] = $scope.newcontact;
        }
        
         $scope.updateContact = updateContact;
    };
    
    return homeController;
});