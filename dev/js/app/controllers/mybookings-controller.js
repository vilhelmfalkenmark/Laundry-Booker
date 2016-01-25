(function() {
  'use strict';
  angular.module('booker')
    .controller('MyBookingsController', ['$scope', 'MyBookingsService', MyBookingsController]);

    function MyBookingsController($scope, MyBookingsService) {

      var myBookings = [
        {
          date: 21964196421978,
          time: "6-10",
          apparatus: ["tvättmaskin","mangel"],
          bookerID: 1234
        },
        {
          date: 21964196421978,
          time: "6-10",
          apparatus: ["tvättmaskin","mangel"],
          bookerID: 1234
        }
      ];
      function bookingPrototype(date, time, apparatus, bookerID) {
        this.date = date;
        this.time = time;
        this.apparatus = apparatus;
        this.bookerID = bookerID;
      }
      var l = 0;
      function newBooking(date, time, apparatus) {
      console.log("NEWBOOKING ÄR KLICKAD!");
      myBookings[l] = new bookingPrototype(date, time, apparatus);
      l++;

      console.log(myBookings)

  }


    }

})();
