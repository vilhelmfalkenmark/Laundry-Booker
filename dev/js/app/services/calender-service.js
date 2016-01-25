/*
Angular services are substitutable objects that are wired together
using dependency injection (DI).
You can use services to organize and share code across your app.
*/
(function() {
  'use strict';
  angular.module('booker')
    .service('CalenderService', ['$firebaseArray', CalenderService]);
  function CalenderService($firebaseArray) {
    var ref = new Firebase("https://laundrybookerjs.firebaseio.com/bookings");
    var bookings = $firebaseArray(ref);
    var milliSeconds = 24 * 60 * 60 * 1000;
    var daySwitch = 0;
/*
    b.$loaded().then(function(b) {
    b.forEach(function(object) {
           console.log(object.bookedBy);
    });
});
*/


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
    }


    function bookTime(date, time, app1, app2, app3, app4, id)
    {
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
    console.log(bookings);


    function createCalender() {
      var date = new Date(new Date().getTime() + daySwitch * milliSeconds);
      // var date = new Date(getTime() + daySwitch * milliSeconds);
      var dates = [];
      var d;
      var leftArrow = (daySwitch > 0) ? true : false;
      var rightArrow = (daySwitch < 14) ? true : false;
      for (var i = 0; i < 7; i++) {
        var day = {};
<<<<<<< HEAD
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
        var fullDate = (year+""+month+""+dateDay);

        console.log(fullDate);

       //console.log((day.dayName).getDate());
        for (var j = 0; j < bookings.length; j++)
         {
           // BLUEPRINT FÖR HUR VI SKRIVER VÅRA STRÄNGVÄRDEN FÖR DATUMEN FRÅN DATABASEN.
          //console.log(new Date(bookings[j].date).getFullYear()+""+new Date(bookings[j].date).getMonth()+""+new Date(bookings[j].date).getDate())
          if (fullDate == (new Date(bookings[j].date).getFullYear()+""+new Date(bookings[j].date).getMonth()+""+new Date(bookings[j].date).getDate()))
          {
            // MANIPULERA VÅRT FÄRDIGA OBJEKT.
            //console.log(day.times) // Alla tider i det nyskapade Objektet.
              for(var k=0;k<day.times.length; k++)
              {
                if(day.times[k].timespan == bookings[j].time)
                {
                  for(var timeblock in day.times[k])
                  {
                  //  console.log(timeblock);
                    for(var apparatus in day.times[k][timeblock])
                    {
                    //  console.log(day.times[k][timeblock][apparatus] + " är apparatus");
                      for(var n = 0; n<bookings[i].bookedApparatus.length;n++)
                      {
                      // console.log(bookings[i].bookedApparatus[n] +" är bookings[i].bookedApparatus[n] ");
                      //  console.log(day.times[k][timeblock][apparatus] +" är day.times[k][timeblock][apparatus]");
                        if(bookings[i].bookedApparatus[n] == day.times[k][timeblock][apparatus])
                        {
                          day.times[k][timeblock].bookedBy = bookings[j].bookedBy; // ID PÅ MEDLEMMEN
                        }
                      //  console.log(bookings[i].bookedApparatus[n]);
                      }
                    }
                  }
                }
                //console.log(day.times[k].timespan);
              }
          // console.log("Hejsan!");
          //  console.log(bookings[j].date + " Är datumet");
          //  console.log(bookings[j].bookedApparatus + " Är de bokade apparaterna");
          }
        }
        dates.push(day);

      }
      for (var key in dates) {
        for (var time in dates[key].times) {
          for (var item in dates[key].times[time]) {
            //console.log(dates[key].times[time][item]);
            //console.log(dates[key].times[time].available);
            if (dates[key].times[time][item].bookedBy === null) {
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
  
})();
