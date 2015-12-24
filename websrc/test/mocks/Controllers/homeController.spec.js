define(["app", "controllers/homeController", "angular", "angular_mocks"], 
  function(App, homeController, angular, parcelJson) {
    beforeEach(module('vrm-spa'));

    describe('homeController should assign', function() {
      var mock = angular.mock, scope;
      var data = {
        singersData:[
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
            }]
          
      }
      
      var $scope, homeCtrl, modal;
      beforeEach(inject(function ($rootScope, $controller, $modal) {
          scope = $rootScope.$new();
          $scope = {};
          modal = $modal;
          homeCtrl = $controller('homeController', { $scope: $scope });
      }));

      // Test case for Contacts data 
      it('Matching contacts list', function() {
          $scope.init();
          expect($scope.contacts).toEqual(data.singersData);
      });

      // Initially contacts list lenght is 10
      it('Total number of contacts should be 10', function() {
          $scope.init();
          expect($scope.contacts.length).toEqual(10);
      });
        
      // When click on add contact button should open add contact modal
      it('Add contact modal should be opened', function() {
        spyOn(modal, 'open');
        $scope.addContact();
        expect(modal.open).toHaveBeenCalled();
      });
        
      // When click on Edit contact button should open edit contact modal
      it('Edit contact modal should be opened', function() {
        spyOn(modal, 'open');
        $scope.editContact();
        expect(modal.open).toHaveBeenCalled();
      });
        
      // When click on delete contact button should open delete contact modal
      it('Delete contact modal should be opened', function() {
        spyOn(modal, 'open');
        $scope.deleteContact();
        expect(modal.open).toHaveBeenCalled();
      }); 
        
        
      // Check whether contact id returns right contact object using getContactObjById
      it('getContactObjById should return contact object for given contact id', function() {
        
        var cObj = $scope.getContactObjById(3);
        expect(cObj.name).toEqual("Shankar Mahadevan");
      }); 
       
      // Change the Shankar Mahadevan name to S Mahadevan to test
      it('Changing contact name of Shankar mahadevan using updateContact function', function() {
        
        $scope.updateContact(3, "S Mahadevan");
        var ucObj = $scope.getContactObjById(3);
        expect(ucObj.name).toEqual("S Mahadevan");
      }); 
        
      // Deleting contact of Mika Singh and ID 2
      it('Deleting contact of Mika Singh and second contact id', function() {
        $scope.deleteContactFromContacts(2);
        var dcObj = $scope.getContactObjById(2);
        expect(dcObj).toBeUndefined();
          
      });
        

    });
});
