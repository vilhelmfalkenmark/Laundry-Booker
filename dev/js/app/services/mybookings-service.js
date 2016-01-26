(function() {
  'use strict';
  angular.module('booker')
    .service('MyBookingsService', ['$firebaseArray', MyBookingsService]);

    function MyBookingsService($firebaseArray)
    {
    var ref = new Firebase("https://laundrybookerjs.firebaseio.com/bookings");
    var b = $firebaseArray(ref); 
      return {
        myBookings: myBookings
      }; 
            
function myBookings(id, $scope) {
var myBookingsList = [];    
    ref.on("value", function(snapshot) {
    myBookingsList = [];
    snapshot.forEach(function(object) {
    if (object.val().bookedBy == id) {    
    myBookingsList.push(object.val());
    }
    });
    $scope.myBookings = myBookingsList;    
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
    return myBookingsList;
}
        
        
    }

})();
