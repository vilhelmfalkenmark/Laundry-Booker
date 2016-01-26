(function() {
  'use strict';
  angular.module('booker')
    .controller('MyBookingsController', ['$scope', 'MyBookingsService', MyBookingsController]);

    function MyBookingsController($scope, MyBookingsService) {

    $scope.showBookingById = function(id) {
    //$scope.myBookings = MyBookingsService.myBookings(id);    
     MyBookingsService.myBookings(id,$scope);
    };



    }

})();
