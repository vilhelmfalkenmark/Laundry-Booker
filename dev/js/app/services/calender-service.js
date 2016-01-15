/*
Angular services are substitutable objects that are wired together
using dependency injection (DI).
You can use services to organize and share code across your app.
*/
(function() {
  'use strict';

  angular.module('booker')
    .service('CalenderService', [CalenderService]);

  function CalenderService($scope) {
    var milliSeconds = 24 * 60 * 60 * 1000;
    var daySwitch = 0;

    return {
      createCalender: createCalender,
      plusWeek: plusWeek,
      minusWeek: minusWeek,
      bookTime: bookTime
    };

    function bookTime() {
      this.booked = false;
    }


    function createCalender() {
      var date = new Date(new Date().getTime() + daySwitch * milliSeconds);
      var dates = [];
      var d;
      var leftArrow = (daySwitch > 0) ? true : false;
      var rightArrow = (daySwitch < 14) ? true : false;
      for (var i = 0; i < 7; i++) {
        var day = {};
        d = date;
        day.availableTimes = 0;
        day.available = false; // Vi sätter till false per default
        day.times = {
          "6-10": true, // True betyder att tiden är ledig
          "10-14": true,
          "14-18": false,
          "18-22": true
        };

        var dayIterator; // Så att man ser även ser dagens datum

        if (i === 0) {
          dayIterator = 0;
        } else {
          dayIterator = 1;
        }

        d = (d.setDate((d.getDate() + dayIterator)));
        day.dayName = d;
        dates.push(day);
      }

      for (var key in dates) {
        for (var time in dates[key].times) {
          if (dates[key].times[time] === true) {
            dates[key].availableTimes++;
          }
        }

        if (dates[key].availableTimes > 0) {
          dates[key].available = true;
        }
      }

      var returnArray = [dates, [leftArrow, rightArrow]];
    //  console.log(returnArray);
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
