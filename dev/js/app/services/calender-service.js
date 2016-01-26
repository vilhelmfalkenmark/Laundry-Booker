/*
Angular services are substitutable objects that are wired together
using dependency injection (DI).
You can use services to organize and share code across your app.
*/
(function() {
  'use strict';
  angular.module('booker')
    .service('CalenderService', ['$firebaseArray', 'MyBookingsService', CalenderService]);
  function CalenderService($firebaseArray, MyBookingsService) {
    var ref = new Firebase("https://laundrybookerjs.firebaseio.com/bookings");
    var bookings = $firebaseArray(ref); 
    var milliSeconds = 24 * 60 * 60 * 1000;
    var daySwitch = 0;

      
    bookings.$loaded().then(function(b) { 
    createCalender();
});


      
    return {
      createCalender: createCalender,
      plusWeek: plusWeek,
      minusWeek: minusWeek,
      markAsBooked: markAsBooked,
      bookTime: bookTime,
      bookings: bookings, 
    };
    function markAsBooked()
    {
        for (var item in this.booked)
        {
          if(this.booked[item].marked === true && this.booked[item].bookedBy === null)
          {
            this.booked[item].bookedBy = true; //
            this.booked.available--;
          }
        }
    }

      
    function bookTime(date, time, app1, app2, app3, app4, id)
    {
      var newBooking = {};
      newBooking.date = date;
      newBooking.time = time;
      newBooking.bookedApparatus = [];
      if(app1 === true)
      {
        newBooking.bookedApparatus.push("Tvättmaskin");
      }
      if(app2 === true)
      {
        newBooking.bookedApparatus.push("Torktumlare");
      }
      if(app3 === true)
      {
        newBooking.bookedApparatus.push("Mangel");
      }
      if(app4 === true)
      {
        newBooking.bookedApparatus.push("Torkskåp");
      }
      newBooking.bookedBy = id;
        
      bookings.$add(newBooking);

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
        day.times = [
           {
              timespan: "6-10",
              available: 0,
              apparatus1:
                {
                name: "tvättmaskin",
                marked: false,
                bookedBy: null
                },
                apparatus2:
                {
                name: "Torktumlare",
                marked: false,
                bookedBy: null
                },
                apparatus3:
                {
                name: "Mangel",
                marked: false,
                bookedBy: null
                },
                apparatus4:
                {
                name: "Torkskåp",
                marked: false,
                bookedBy: null
                }
            },
             {
              timespan: "10-14",
              available: 0,
              apparatus1: {
              name: "tvättmaskin",
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
            },
            {
              timespan: "14-18",
              available: 0,
              apparatus1: {
              name: "tvättmaskin",
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
            },
            {
              timespan: "18-22",
              available: 0,
              apparatus1: {
              name: "tvättmaskin",
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
          }
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
                if(dates[key].times[time][item].bookedBy === null)
                {
                  dates[key].times[time].available++;
                }
                //console.log(dates[key].times[time].available);
                //console.log(dates[key].times[time][item]);
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
