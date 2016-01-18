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

        console.log(this.booked);
        //this.booked = false; // GAMLA KODEN!
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
        day.times = [ ///// !!!!!!!!! TRUE BETYDER ATT DET ÄR LEDIGT !!!!!!!!!!! //////////////
           {
              timespan: "6-10",
              available: 0,
              "Tvättmaskin": false, // Tvättmaskin
              "Torktumlare": true, // Torktumlare
              "Mangel": true, // Mangel
              "Torkskåp": true // Torkskåp
            },
             {
              timespan: "10-14",
              available: 0,
              "Tvättmaskin": false, // Tvättmaskin
              "Torktumlare": false, // Torktumlare
              "Mangel": false, // Mangel
              "Torkskåp": false // Torkskåp
            },
            {
              timespan: "14-18",
              available: 0,
              "Tvättmaskin": true, // Tvättmaskin
              "Torktumlare": true, // Torktumlare
              "Mangel": true, // Mangel
              "Torkskåp": true // Torkskåp
            },
            {
              timespan: "18-22",
              available: 0,
              "Tvättmaskin": false, // Tvättmaskin
              "Torktumlare": true, // Torktumlare
              "Mangel": true, // Mangel
              "Torkskåp": true // Torkskåp
            }
          // "6-10": true, // True betyder att tiden är ledig
          // "10-14": true,
          // "14-18": false,
          // "18-22": true
        ];
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
              for(var item in dates[key].times[time])
              {
                //console.log(dates[key].times[time][item]);
                //console.log(dates[key].times[time].available);
                if(dates[key].times[time][item]=== true)
                {
                  dates[key].times[time].available++;
                }
                //console.log(dates[key].times[time].available);
                //console.log(dates[key].times[time][item]);
              }
          }
        }
      //updateTime();
      // for (var key in dates) {
      //   for (var time in dates[key].times) {
      //
      //
      //
      //     if (dates[key].times[time] === true) {
      //       dates[key].availableTimes++;
      //     }
      //   }
      //
      //   if (dates[key].availableTimes > 0) {
      //     dates[key].available = true;
      //   }
      // }
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
