(function() {
  'use strict';

  angular.module('booker')
    .controller('CalenderController', ['$scope', 'CalenderService','ModalService', CalenderController]);

  function CalenderController($scope, CalenderService, ModalService) {

    $scope.returnArray = CalenderService.createCalender();
    $scope.plusWeek = function(){
      CalenderService.plusWeek();
      $scope.returnArray = CalenderService.createCalender();
    };
    $scope.minusWeek = function(){
      CalenderService.minusWeek();
      $scope.returnArray = CalenderService.createCalender();
    };

    $scope.test = ModalService.test;
  }
})();
