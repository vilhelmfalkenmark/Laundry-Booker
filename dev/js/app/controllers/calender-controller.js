(function() {
  'use strict';

  angular.module('booker')
    .controller('CalenderController', ['$scope', 'CalenderService', CalenderController]);

  function CalenderController($scope, CalenderService) {

    $scope.bookTime = CalenderService.bookTime; // Pappafunktionen
    $scope.bookedTime = CalenderService.bookedTime;

    $scope.numberOfBookings = 0;

    // $scope.isCheckboxChecked = function() {
    // return ($scope.block.washer || $scope.block.tumbler || $scope.block.dryer || $scope.block.mangel);
    // };

    $scope.myBookings = function(a,b){
      $scope.bookedTime = a;
      $scope.bookedDay = b;
      $scope.numberOfBookings++;
    };


    /* EXPERIMENT */
    $scope.outputs = {};
    $scope.inputs = {
    'category': ['one','two','three'],
    'color':['blue','green']
    };
    /* EXPERIMENT */


      $scope.returnArray = CalenderService.createCalender();

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
