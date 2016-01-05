var app = angular.module('booker', []);

app.controller('mainController', ['$scope', function($scope) {

  $scope.date = new Date();
    $scope.dates = [];
    var d;
    for(var i = 0; i < 7; i++){
       d = $scope.date;
       d = (d.setDate((d.getDate() + 1)));
       $scope.dates.push(d);
    }
}]);
