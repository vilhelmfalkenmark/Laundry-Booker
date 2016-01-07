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
