(function() {
  'use strict';

  angular.module('booker', []);

})();

(function() {
  'use strict';

  angular.module("ngLocale", [], ["$provide", function($provide) {
    var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    function getDecimals(n) {
      n = n + '';
      var i = n.indexOf('.');
      return (i == -1) ? 0 : n.length - i - 1;
    }

    function getVF(n, opt_precision) {
      var v = opt_precision;

      if (undefined === v) {
        v = Math.min(getDecimals(n), 3);
      }

      var base = Math.pow(10, v);
      var f = ((n * base) | 0) % base;
      return {v: v, f: f};
    }

    $provide.value("$locale", {
      "DATETIME_FORMATS": {
        "AMPMS": [
          "fm",
          "em"
        ],
        "DAY": [
          "s\u00f6ndag",
          "m\u00e5ndag",
          "tisdag",
          "onsdag",
          "torsdag",
          "fredag",
          "l\u00f6rdag"
        ],
        "ERANAMES": [
          "f\u00f6re Kristus",
          "efter Kristus"
        ],
        "ERAS": [
          "f.Kr.",
          "e.Kr."
        ],
        "FIRSTDAYOFWEEK": 0,
        "MONTH": [
          "januari",
          "februari",
          "mars",
          "april",
          "maj",
          "juni",
          "juli",
          "augusti",
          "september",
          "oktober",
          "november",
          "december"
        ],
        "SHORTDAY": [
          "s\u00f6n",
          "m\u00e5n",
          "tis",
          "ons",
          "tors",
          "fre",
          "l\u00f6r"
        ],
        "SHORTMONTH": [
          "jan.",
          "feb.",
          "mars",
          "apr.",
          "maj",
          "juni",
          "juli",
          "aug.",
          "sep.",
          "okt.",
          "nov.",
          "dec."
        ],
        "STANDALONEMONTH": [
          "Januari",
          "Februari",
          "Mars",
          "April",
          "Maj",
          "Juni",
          "Juli",
          "Augusti",
          "September",
          "Oktober",
          "November",
          "December"
        ],
        "WEEKENDRANGE": [
          5,
          6
        ],
        "fullDate": "EEEE d MMMM y",
        "longDate": "d MMMM y",
        "medium": "d MMM y HH:mm:ss",
        "mediumDate": "d MMM y",
        "mediumTime": "HH:mm:ss",
        "short": "y-MM-dd HH:mm",
        "shortDate": "y-MM-dd",
        "shortTime": "HH:mm"
      },
      "NUMBER_FORMATS": {
        "CURRENCY_SYM": "kr",
        "DECIMAL_SEP": ",",
        "GROUP_SEP": "\u00a0",
        "PATTERNS": [
          {
            "gSize": 3,
            "lgSize": 3,
            "maxFrac": 3,
            "minFrac": 0,
            "minInt": 1,
            "negPre": "-",
            "negSuf": "",
            "posPre": "",
            "posSuf": ""
          },
          {
            "gSize": 3,
            "lgSize": 3,
            "maxFrac": 2,
            "minFrac": 2,
            "minInt": 1,
            "negPre": "-",
            "negSuf": "\u00a0\u00a4",
            "posPre": "",
            "posSuf": "\u00a0\u00a4"
          }
        ]
      },
      "id": "sv-se",
      "pluralCat": function(n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
    });
  }]);

})();

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

/*
Angular services are substitutable objects that are wired together
using dependency injection (DI).
You can use services to organize and share code across your app.
*/
(function() {
  'use strict';

  angular.module('booker')
    .service('CalenderService', [CalenderService]);

  function CalenderService(){
  var milliSeconds = 24 * 60 * 60 * 1000;
  var daySwitch = 0;

  return {
    createCalender: createCalender,
    plusWeek: plusWeek,
    minusWeek: minusWeek,
  };

  function createCalender()
  {
    var date = new Date(new Date().getTime() + daySwitch*milliSeconds);
    var dates = [];
    var d;
    for(var i = 0; i < 7; i++)
    {
      var day = {};
      d = date;
      if(i == 0) // Så att dagarna skiljer sig från varandra på något sätt
      {
        day.likes = "hej";
      }

      day.laundryBookings = 0;
      day.tumblerBookings = 0;
      day.mangelBookings = 0;


      d = (d.setDate((d.getDate() + 1)));
      day.dayName = d;
      dates.push(day);
    }
  //  console.log(dates)
    return dates;
  }

  function plusWeek() {
    if(daySwitch < 14)
    {
      daySwitch += 7;
      createCalender();
    }
  }

  function minusWeek() {
    if(daySwitch > 0)
    {
      daySwitch -= 7;
      createCalender();
    }
  }
}
})();

/*
Angular services are substitutable objects that are wired together
using dependency injection (DI).
You can use services to organize and share code across your app.
*/
(function() {
  'use strict';
  angular.module('booker')
      .service('ModalService', [ModalService]);

  function ModalService()
  {
      return {
      test: test,
      };
    function test(index)
    {
        //console.log("hej")

         var container = document.getElementsByClassName('container')[0];
        console.log(index);

        return index;

    }
  }



})();

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

(function() {
  'use strict';

 angular.module('booker')
     .controller('ModalController', ['$scope', 'ModalService', ModalController]);

  function ModalController($scope, ModalService)
  {
    $scope.indexa = ModalService.test();
  }

})();
