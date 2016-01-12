(function() {
  'use strict';

  angular.module('booker')
    .controller('CalenderController', ['$scope', 'CalenderService', CalenderController]);

  function CalenderController($scope, CalenderService) {

    $scope.bookTime = CalenderService.bookTime; 

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
