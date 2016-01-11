(function() {
  'use strict';
  angular.module('booker')
    .directive('dayModal', function() {
    return {
      restrict: 'E',
      scope: {
        info: "="
      },
      templateUrl: 'js/app/directives/dayModal.html'
    };
  });
})();
