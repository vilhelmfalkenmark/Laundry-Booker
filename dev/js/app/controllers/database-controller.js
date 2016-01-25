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