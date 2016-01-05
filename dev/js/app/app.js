var app = angular.module('booker', []);

app.controller('mainController', ['$scope', function($scope) {
  var milliSeconds = 24 * 60 * 60 * 1000;
  $scope.daySwitch = 0;

  function createCalender()
  {
    $scope.date = new Date(new Date().getTime() + $scope.daySwitch*milliSeconds);
    $scope.dates = [];
      var d;
      for(var i = 0; i < 7; i++)
      {
          var day = {};
          d = $scope.date;
          d = (d.setDate((d.getDate() + 1)));
          day.dayName = d;
          $scope.dates.push(day);
      }
  }
  createCalender()
    $scope.plusWeek = function() {

      if($scope.daySwitch < 14)
      {
        $scope.daySwitch += 7;
        createCalender()
      }
  	};

   	 $scope.minusWeek = function() {
       if($scope.daySwitch > 0)
       {
         $scope.daySwitch -= 7;
         createCalender()
       }
  	};
}]);
