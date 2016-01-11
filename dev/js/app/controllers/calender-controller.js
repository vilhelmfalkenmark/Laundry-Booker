(function() {
  'use strict';

  angular.module('booker')
    .controller('CalenderController', ['$scope', 'CalenderService','ModalService', CalenderController]);

  function CalenderController($scope, CalenderService, ModalService) {

    $scope.dates = CalenderService.createCalender();
    $scope.plusWeek = function(){
      CalenderService.plusWeek();
      $scope.dates = CalenderService.createCalender();
    };
    $scope.minusWeek = function(){
      CalenderService.minusWeek();
      $scope.dates = CalenderService.createCalender();
    };

    $scope.test = ModalService.test;
  }
})();
