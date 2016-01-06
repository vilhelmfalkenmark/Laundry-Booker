(function() {
  'use strict';

  angular.module('booker')
    .controller('CalenderController', ['$scope', 'CalenderService', CalenderController]);

  function CalenderController($scope, CalenderService) {

    $scope.dates = CalenderService.createCalender();
    $scope.plusWeek = function(){
      CalenderService.plusWeek();
      $scope.dates = CalenderService.createCalender();
    };
    $scope.minusWeek = function(){
      CalenderService.minusWeek();
      $scope.dates = CalenderService.createCalender();
    };

  }
})();
