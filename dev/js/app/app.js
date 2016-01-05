var app = angular.module('booker', []);

app.controller('mainController', ['$scope', function($scope) {

   $scope.date = new Date();

}]);
