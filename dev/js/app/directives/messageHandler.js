angular.module('booker')
.directive('notification', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    controller: ['$scope', function ($scope) {
      $scope.notification = {
        status: 'hide',
        type: 'success',
        message: 'Welcome! It\'s yet another angular alert ;)'
      };
    }],
    link: function(scope, elem, attrs) {
      attrs.$observe('notification', function (value) {
        if (value === 'show') {
          $(elem).show();
          $timeout(function () {
            $(elem).hide();
            scope.notification.status = 'hide';
          }, 3000);
        }
      });
    }
  };
}]);