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
