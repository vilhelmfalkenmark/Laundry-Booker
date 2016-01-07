(function() {
  'use strict';

 angular.module('booker')
     .controller('ModalController', ['$scope', 'ModalService', ModalController]);

  function ModalController($scope, ModalService)
  {
    $scope.indexa = ModalService.test();
  }

})();
