(function() {
  'use strict';

  angular.module('booker')
    .controller('CalenderController', ['$scope', 'CalenderService', CalenderController]);

  function CalenderController($scope, CalenderService) {

    $scope.bookTime = CalenderService.bookTime; // Pappafunktionen
    $scope.bookedTime = CalenderService.bookedTime; 

    $scope.numberOfBookings = 0;

    $scope.myBookings = function(a,b){
      $scope.bookedTime = a;
      $scope.bookedDay = b;
      $scope.numberOfBookings++;
    }
    $scope.dates = CalenderService.createCalender();
    $scope.plusWeek = function(){
      CalenderService.plusWeek();
      $scope.returnArray = CalenderService.createCalender();
    };
    $scope.minusWeek = function(){
      CalenderService.minusWeek();
      $scope.returnArray = CalenderService.createCalender();
    };
  }
})();
