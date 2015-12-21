define([], function(){
  var deleteContact = function($rootScope, utilityFactory) {
    return {
      link: function($scope, element) {
        var self = this, 
        contactId = utilityFactory.getSelectedContactId(),
        cardBox = $(".contact-card-box[contact-id='" + contactId + "']"),
        cardNameEle = $(cardBox).find(".contact-card-col .contact-name"),
        cardPic = $(cardBox).find(".contact-card-col .contact-picture");
        $(".contact-modal-body #contact-pictureid").attr("src", cardPic.attr("src"));
        $(".contact-modal-body #contact-nameId").html(cardNameEle.html());
      },
    };
  };

  deleteContact.$inject = ["$rootScope", "utilityFactory"];

  return deleteContact;
});
