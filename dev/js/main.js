(function() {
  'use strict';

  angular.module('booker', ['firebase']);

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

(function () {
    'use strict';

    angular.module('booker')
        .controller('CalenderController', ['$scope', 'CalenderService', 'MemberService', 'MyBookingsService', CalenderController]);

    function CalenderController($scope, CalenderService, MemberService, MyBookingsService) {

        $scope.bookTime = CalenderService.bookTime; // Pappafunktionen
        $scope.bookedTime = CalenderService.bookedTime;
        $scope.markAsBooked = CalenderService.markAsBooked;

        $scope.toggleSelection = CalenderService.toggleSelection;
        $scope.checkedItems = CalenderService.checkedItems;

        $scope.returnArray = CalenderService.createCalender();
        $scope.bookings = CalenderService.bookings;

<<<<<<< HEAD
<<<<<<< HEAD
        $scope.cancelBooking = CalenderService.cancelBooking;
        
        // $scope.cancelBooking = function(a,b,c)
        // {
        //   ref.remove();
        //   console.log("hej");
        //   console.log(a,b,c);
        // };



=======
>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings
=======
>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings
        $scope.plusWeek = function () {
            CalenderService.plusWeek();
            $scope.returnArray = CalenderService.createCalender();
        };
        $scope.minusWeek = function () {
            CalenderService.minusWeek();
            $scope.returnArray = CalenderService.createCalender();
        };
    

    $scope.members = MemberService.getMembers();

    $scope.sendMemberId = function(id, username){
    $scope.activeMemberId = id;
    $scope.activeMemberfullName = username;
    };
    }
})();

/*angular.module('booker')
    .controller("BookingCtrl", function ($scope, $firebaseArray) {
        var ref = new Firebase("https://laundrybookerjs.firebaseio.com/bookings");
        $scope.bookings = $firebaseArray(ref);
        $scope.addBooking = function () {
            for (var item in this.booked) {
                if (this.booked[item].marked === true) {
                    $scope.bookings.$add({
                        bookedBy: this.booked[item].bookedBy,
                        name: this.booked[item].name,
                        date: this.date.dayName,
                        timespan: this.booked.timespan
                    });
                }
            }
        }
    });
    */
(function() {
  'use strict';
  angular.module('booker')
    .controller('MyBookingsController', ['$scope', 'MyBookingsService', MyBookingsController]);

    function MyBookingsController($scope, MyBookingsService) {

    $scope.showBookingById = function(id) {
<<<<<<< HEAD
<<<<<<< HEAD
    $scope.myBookings = MyBookingsService.myBookings(id);
=======
    //$scope.myBookings = MyBookingsService.myBookings(id);    
     MyBookingsService.myBookings(id,$scope);    
>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings
=======
    //$scope.myBookings = MyBookingsService.myBookings(id);    
     MyBookingsService.myBookings(id,$scope);    
>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings
    };
        


    }

})();

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
$(document).ready(function () {
    $('.weekdays-container').on('click', '.weekday-expand', function() {
        $('.booking-container').slideUp(500);
        if ($(this).hasClass('expanded')) {
        $('.weekday-expand').removeClass('expanded');
        $(this).parent().find('.booking-container').slideUp(500);
        $(this).removeClass('expanded');
        }
        else {
        $('.weekday-expand').removeClass('expanded');
        $(this).parent().find('.booking-container').slideDown(500);
        $(this).addClass('expanded');  
        }
    });
    $('.button-bookings').click(function() {
    $('.my-bookings').slideToggle(500);
    });
    $('.close-bookings').click(function() {
    $('.my-bookings').slideUp(500);
    });
});

(function() {
  'use strict';
  angular.module('booker')
    .service('BookingService', ['$scope, $firebaseArray', BookingService]);
    function BookingService($scope, $firebaseArray) {
    var ref = new Firebase("https://laundrybookerjs.firebaseio.com/bookings");
    $scope.bookings = $firebaseArray(ref); 
    return {
      bookTime: bookTime
    };
    function bookTime()
    {
        for (var item in this.booked)
        {
          if(this.booked[item].marked === true && this.booked[item].bookedBy === null)
          {
              
                                $scope.bookings.$add({
                                    bookedBy: this.booked[item].bookedBy,
                                    name: this.booked[item].name,
                                    date: this.date.dayName,
                                    timespan: this.booked.timespan
                                });
                        
                    
          }
        }
    }
  }

});
/*
Angular services are substitutable objects that are wired together
using dependency injection (DI).
You can use services to organize and share code across your app.
*/
(function() {
  'use strict';
  angular.module('booker')
<<<<<<< HEAD
<<<<<<< HEAD
    .service('CalenderService', ['$firebaseArray','$firebaseObject', CalenderService]);

  function CalenderService($firebaseArray,$firebaseObject) {
    var ref = new Firebase("https://villes-laundy.firebaseio.com/bookings");
    var daySwitch = 0;
=======
=======
>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings
    .service('CalenderService', ['$firebaseArray', 'MyBookingsService', CalenderService]);
  function CalenderService($firebaseArray, MyBookingsService) {
    var ref = new Firebase("https://laundrybookerjs.firebaseio.com/bookings");
    var bookings = $firebaseArray(ref); 
    var milliSeconds = 24 * 60 * 60 * 1000;
    var daySwitch = 0;
<<<<<<< HEAD
=======

      
    bookings.$loaded().then(function(b) { 
    createCalender();
});

>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings

      
    bookings.$loaded().then(function(b) { 
    createCalender();
});

>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings

    var bookings = $firebaseArray(ref);
    var milliSeconds = 24 * 60 * 60 * 1000;

  //  bookTime(1453805499917,"6-10",false, false, true,false, 1);
    return {
      createCalender: createCalender,
      plusWeek: plusWeek,
      minusWeek: minusWeek,
      markAsBooked: markAsBooked,
      bookTime: bookTime,
      bookings: bookings,
      cancelBooking: cancelBooking

    };

    function cancelBooking(apparatus,date,timespan,memberID)
    {
      console.log(apparatus);
      console.log(date);
      console.log(memberID);
      // var database = ref.child("bookings");
      //var database = $firebaseObject(ref);
      var database = $firebaseArray(ref);
      //console.log(database);
      database.$loaded()
      {
        console.log(database);
      }
      //console.log(bookings);
    //  bookings.remove();
      console.log("Tjena från CalenderService");
    }


    function markAsBooked() {
      for (var item in this.booked) {
        if (this.booked[item].marked === true && this.booked[item].bookedBy === null) {
          this.booked[item].bookedBy = true; //
          this.booked.available--;
        }
      }
    }
    //console.log(daySwitch);
    function bookTime(date, time, app1, app2, app3, app4, id) {

      if(app1 == false && app2 == false && app3 == false && app4 == false )
      {
        console.log("Jodå!")
        return false;
      }
      var newBooking = {};
      newBooking.date = date;
      newBooking.time = time;
      newBooking.bookedApparatus = [];

      if (app1 === true) {
        newBooking.bookedApparatus.push("Tvättmaskin");
      }
      if (app2 === true) {
        newBooking.bookedApparatus.push("Torktumlare");
      }
      if (app3 === true) {
        newBooking.bookedApparatus.push("Mangel");
      }
      if (app4 === true) {
        newBooking.bookedApparatus.push("Torkskåp");
      }
      newBooking.bookedBy = id;
      bookings.$add(newBooking);
<<<<<<< HEAD
=======

    }
>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings

    }

    function createCalender() {
      var date = new Date(new Date().getTime() + daySwitch * milliSeconds);
      // var date = new Date(getTime() + daySwitch * milliSeconds);
      var dates = [];
      var d;
      var leftArrow = (daySwitch > 0) ? true : false;
      var rightArrow = (daySwitch < 14) ? true : false;
      for (var i = 0; i < 7; i++) {
        var day = {};
        d = date;
        day.times = [{
          timespan: "6-10",
          available: 0,
          apparatus1: {
            name: "Tvättmaskin",
            marked: false,
            bookedBy: null
          },
          apparatus2: {
            name: "Torktumlare",
            marked: false,
            bookedBy: null
          },
          apparatus3: {
            name: "Mangel",
            marked: false,
            bookedBy: null
          },
          apparatus4: {
            name: "Torkskåp",
            marked: false,
            bookedBy: null
          }
        }, {
          timespan: "10-14",
          available: 0,
          apparatus1: {
            name: "Tvättmaskin",
            marked: false,
            bookedBy: null
          },
          apparatus2: {
            name: "Torktumlare",
            marked: false,
            bookedBy: null
          },
          apparatus3: {
            name: "Mangel",
            marked: false,
            bookedBy: null
          },
          apparatus4: {
            name: "Torkskåp",
            marked: false,
            bookedBy: null
          }
        }, {
          timespan: "14-18",
          available: 0,
          apparatus1: {
            name: "Tvättmaskin",
            marked: false,
            bookedBy: null
          },
          apparatus2: {
            name: "Torktumlare",
            marked: false,
            bookedBy: null
          },
          apparatus3: {
            name: "Mangel",
            marked: false,
            bookedBy: null
          },
          apparatus4: {
            name: "Torkskåp",
            marked: false,
            bookedBy: null
          }
        }, {
          timespan: "18-22",
          available: 0,
          apparatus1: {
            name: "Tvättmaskin",
            marked: false,
            bookedBy: null
          },
          apparatus2: {
            name: "Torktumlare",
            marked: false,
            bookedBy: null
          },
          apparatus3: {
            name: "Mangel",
            marked: false,
            bookedBy: null
          },
          apparatus4: {
            name: "Torkskåp",
            marked: false,
            bookedBy: null
          }
        }];

        var dayIterator; // Så att man ser även ser dagens datum
        if (i === 0) {
          dayIterator = 0;
        } else {
          dayIterator = 1;
        }
        d = (d.setDate((d.getDate() + dayIterator)));
        //console.log(d);
        day.dayName = d;

        var dateDay = new Date(d);
        var month = dateDay;
        var year = dateDay;
        dateDay = dateDay.getDate();
        month = month.getMonth();
        year = year.getFullYear();
        var fullDate = (year + "" + month + "" + dateDay);

        //console.log(fullDate);
        //console.log((day.dayName).getDate());
        for (var j = 0; j < bookings.length; j++)
        {
        //  console.log(bookings);
          // BLUEPRINT FÖR HUR VI SKRIVER VÅRA STRÄNGVÄRDEN FÖR DATUMEN FRÅN DATABASEN.
          //console.log(new Date(bookings[j].date).getFullYear()+""+new Date(bookings[j].date).getMonth()+""+new Date(bookings[j].date).getDate())
          if (fullDate == (new Date(bookings[j].date).getFullYear() + "" + new Date(bookings[j].date).getMonth() + "" + new Date(bookings[j].date).getDate())) {
            //console.log(fullDate + " Är datumet där bokningen finns!");
            for (var k = 0; k < bookings[j].bookedApparatus.length; k++) {
              //console.log(bookings[j].time + " är tiden där det finns "+k+" bokningar");
              for (var item in day) {
                for (var timeblock in day[item]) {
                  //console.log(day[item][timeblock].timespan);
                  if (bookings[j].time == day[item][timeblock].timespan) {
                    for (var apparatus in day[item][timeblock]) {
                      if (day[item][timeblock][apparatus].name == bookings[j].bookedApparatus[k]) {
                        day[item][timeblock][apparatus].bookedBy = 1234;
                      }
                    }
                  }
                }
              }
            }
          }
        }


      dates.push(day);
      }
      for (var key in dates) {
        for (var time in dates[key].times) {
          for (var item in dates[key].times[time])
          {
            if (dates[key].times[time][item].bookedBy === null) {
              dates[key].times[time].available++;
            }
          }
        }
      }
      var returnArray = [dates, [leftArrow, rightArrow]];
      return returnArray;
    }
    function plusWeek() {
      if (daySwitch < 14) {
        daySwitch += 7;
        createCalender();
      }
    }
    function minusWeek() {
      if (daySwitch > 0) {
        daySwitch -= 7;
        createCalender();
      }
    }
  }
})();

(function() {
  'use strict';
  angular.module('booker')
    .service('MemberService', ['$http', MemberService]);
    function MemberService($http){
      var members = [
        {
          "id": 1,
          "firstname": "Vilhelm",
          "lastname": "Falkenmark",
          "username": "vilhelmfalkenmark",
          "floor": "3",
          "apartment": "1408",
          "password": "1234"
        },
        {
          "id": 2,
          "firstname": "Simon",
          "lastname": "Lager",
          "username": "simonlager",
          "floor": "4",
          "apartment": "4322",
          "password": "1234"
        },
        {
          "id": 3,
          "firstname": "Fredrik",
          "lastname": "Löfgren",
          "username": "fredriklofgren",
          "floor": "4",
          "apartment": "8109",
          "password": "1234"
        }
      ];
      return {
        getMembers: getMembers
      };
      function getMembers(){
        return members;
      }

      // **** Gets members fom members.json  ****
      // **** Problem is delay until data is ****
      // **** fetched needs bugg controll    ****
      //
      // function getMembers(){
      //   return $http.get('./js/members/members.json')
      //   .then(function(res) {
      //     // console.log(res.data);
      //     return res;
      //   }, function(err) {
      //     console.log(err);
      //   });
      // }
    }
})();

(function() {
  'use strict';
  angular.module('booker')
    .service('MyBookingsService', ['$firebaseArray', MyBookingsService]);

<<<<<<< HEAD
<<<<<<< HEAD
  function MyBookingsService($firebaseArray) {
    var ref = new Firebase("https://villes-laundy.firebaseio.com/bookings");
    var b = $firebaseArray(ref);
    return {
      myBookings: myBookings
    };

    
=======
=======
>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings
    function MyBookingsService($firebaseArray)
    {
    var ref = new Firebase("https://laundrybookerjs.firebaseio.com/bookings");
    var b = $firebaseArray(ref); 
      return {
        myBookings: myBookings
      }; 
            
function myBookings(id, $scope) {
var myBookingsList = [];    
    ref.on("value", function(snapshot) {
    myBookingsList = [];
    snapshot.forEach(function(object) {
    if (object.val().bookedBy == id) {    
    myBookingsList.push(object.val());
    }
    });
    $scope.myBookings = myBookingsList;    
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
    return myBookingsList;
}
        
        
    }
>>>>>>> 2e74c73... Fixed problem with duplicate elemetns in my bookings


    function myBookings(id) {
      var myBookingsList = [];
      ref.on("value", function(snapshot) {
        snapshot.forEach(function(object) {
          if (object.val().bookedBy == id) {
            myBookingsList.push(object.val());
          }
        });
      }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
      return myBookingsList;
    }
  }
})();
