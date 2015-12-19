'use strict';

/*
 * Define all utility methods here so that it could
 * be consumed by the project
*/ 

define([], function(){
  var errorMessageMap = function() {
   var SERVER_ERROR_MAP = {
    "100":"Oops! It looks like something has gone wrong. If you would like to " + 
            "let us know about your technical difficulties, please go to our Help page. " + 
            "We will work hard to resolve this as quickly as possible.",
    "101":"Oops! It looks like something has gone wrong. If you would like to " + 
            "let us know about your technical difficulties, please go to our Help page. " + 
            "We will work hard to resolve this as quickly as possible.",
    "102":"Oops! The number you are trying to track hasn't been recognized. " + 
            " Please re-enter it and try again.",
    "110":"Oops, looks like something went wrong on our side. "+
            "Please call the contact centre to get help with your parcel tracking.",
    "503":"Not able to authenticate your access level. "+
            "Please contact toYou support team if you think you should have additional rights. ",
    "404":"Oops, looks like we can’t find what you are looking for, "+
            "Please try navigating back to find the right place",
    "203":"No such client on toyou network"
   };
   var CLIENT_ERROR_MAP = {
    "invalidSeoKey": "Invalid client",
    "inactiveClient": " is no longer part of toyou network." +
            " Please contact the retailer for which you wish to return the parcel.",
    "no-location-detail": "We can't display location details currently. Please re-try later.",
    "no-collection-hours":"We can't display collection hours currently. Please re-try later.",
    "no-parcel": "We can't display collection details for this location currently."+
            " Please re-try later.",
    "parcel-retrieve-failed":"We are not able to retrieve the details of the parcel at this time.",
    "no-details" : "Details not available",
    "auth-failed":"Not able to authenticate your access level. "+
            "Please contact toYou support team if you think you should have additional rights.",
    "genericError": "Oops, looks like something went wrong on our side." +
             " Please call the contact centre to get help.",
    "trackerGenericError": "Oops! It looks like something has gone wrong. If you would like " + 
                    "to let us know about your technical difficulties, please go to " + 
                    "our Help page. We will work hard to resolve this as quickly as possible.",
    "timeoutB2cError": "Oops, looks like that request is taking too long on our side." +
            " Please try again later.",
    "parcel-retrieve-timeout": " Oops! Your request is taking too long to process. " + 
            "Please try again later.",
    "timeoutFacilityError": "Oops! It looks like something has gone wrong. Please try again later.",
    "genericFacilityError": "Oops, looks like something went wrong on our side. " + 
            "Please try again later.",
    "noClientError": "No such client on toyou network.",
    "noLocationsFoundError": "No toyou locations found for the postcode or city/town entered.",
    "invalidLocationError": "Please enter a valid UK postcode or City/Town.",
    "mandatoryInputError": "Please enter mandatory input values and try again",
    "returnLabelGenericError": "Oops, looks like something went wrong from our side. "+
            "Please call contact center for help",
    "returnLabelTimeoutError": "Oops, looks like that request is taking too long on our side. " +
            "Please try again later.",
    "emailServiceError":"The label has been successfully generated. "+
            "Unable to send return label to your Email:",
    "invalidParcelNumber":"You have entered an invalid parcel number. "+
            "Please re-enter it and try again",
    "invalidOrderNumber":"You have entered an invalid order number. "+
            "Please re-enter it and try again."
   };

   var getMessage = function (errorCode) {
     if (CLIENT_ERROR_MAP[errorCode]) {
       return CLIENT_ERROR_MAP[errorCode];
     } else if (SERVER_ERROR_MAP[errorCode]) {
       return SERVER_ERROR_MAP[errorCode];
     }
     else {
       return null;
     }
   };

    return {"getMessage":getMessage};
  };
  return errorMessageMap;

});
