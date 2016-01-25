(function() {
  'use strict';
  angular.module('booker')
    .service('BookingService', ['$scope, $firebaseArray', BookingService]);
    function BookingService($scope, $firebaseArray) {
    var ref = new Firebase("https://laundrybookerjs.firebaseio.com/bookings");
    $scope.bookings = $firebaseArray(ref); 
    return {
      bookTime: bookTime
    };
    function bookTime()
    {
        for (var item in this.booked)
        {
          if(this.booked[item].marked === true && this.booked[item].bookedBy === null)
          {
              
                                $scope.bookings.$add({
                                    bookedBy: this.booked[item].bookedBy,
                                    name: this.booked[item].name,
                                    date: this.date.dayName,
                                    timespan: this.booked.timespan
                                });
                        
                    
          }
        }
    }
  }

});