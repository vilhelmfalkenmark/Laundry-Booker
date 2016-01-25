(function() {
  'use strict';

  angular.module('booker')
    .controller('CalenderController', ['$scope', 'CalenderService', 'MemberService', CalenderController]);

  function CalenderController($scope, CalenderService, MemberService) {

    $scope.bookTime = CalenderService.bookTime; // Pappafunktionen
    $scope.bookedTime = CalenderService.bookedTime;
    $scope.markAsBooked = CalenderService.markAsBooked;
    $scope.numberOfBookings = 0;

    $scope.myBookings = function(a,b){
      $scope.bookedTime = a;
      $scope.bookedDay = b;
      $scope.numberOfBookings++;
    };

    $scope.toggleSelection = CalenderService.toggleSelection;
    $scope.checkedItems = CalenderService.checkedItems;

    $scope.returnArray = CalenderService.createCalender();
    $scope.bookings = CalenderService.bookings;


    $scope.plusWeek = function(){
      CalenderService.plusWeek();
      $scope.returnArray = CalenderService.createCalender();
    };
    $scope.minusWeek = function(){
      CalenderService.minusWeek();
      $scope.returnArray = CalenderService.createCalender();
    };

    $scope.members = MemberService.getMembers();
    $scope.sendMemberId = function(id){
      console.log(id);
    };
  }
})();
