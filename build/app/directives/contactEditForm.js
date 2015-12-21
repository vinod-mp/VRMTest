define([], function(){
  var contactEditForm = function($rootScope, utilityFactory) {
    return {
      link: function($scope, element) {

        var contactId = utilityFactory.getSelectedContactId(),
        cardBox = $(".contact-card-box[contact-id='" + contactId + "']"),
        cardNameEle = $(cardBox).find(".contact-card-col .contact-name"),
        cardPhoneEle = $(cardBox).find(".contact-card-col .contact-phone"),
        cardEmailEle = $(cardBox).find(".contact-card-col .contact-email");

        $(".contact-modal-body #cname").val(cardNameEle.html());
        $(".contact-modal-body #phone").val(cardPhoneEle.html());
        $(".contact-modal-body #email").val(cardEmailEle.html());
      },
    };
  };

  contactEditForm.$inject = ["$rootScope", "utilityFactory"];

  return contactEditForm;
});
