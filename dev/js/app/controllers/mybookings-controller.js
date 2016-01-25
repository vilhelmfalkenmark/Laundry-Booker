(function() {
  'use strict';
  angular.module('booker')
    .controller('MyBookingsController', ['$scope', 'MyBookingsService', MyBookingsController]);

    function MyBookingsController($scope, MyBookingsService) {

      // $scope.newBooking = function(){
      //       console.log("klickad!")
      // };

     $scope.myBookings = MyBookingsService.myBookings("12345");

    }




})();
