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
        
function myBookings(id) {
    var myBookingsList = [];
    b.$loaded().then(function(b) { 
    b.forEach(function(object) {
          if (object.bookedBy == id) {
              myBookingsList.push(object);
          }
    });
});
    return myBookingsList;
}
        
        
    }

})();
