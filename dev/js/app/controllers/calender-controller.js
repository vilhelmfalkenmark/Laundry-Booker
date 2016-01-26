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

        
        CalenderService.getBookings($scope);
        $scope.bookings = CalenderService.bookings;


        $scope.cancelBooking = CalenderService.cancelBooking;

        // $scope.cancelBooking = function(a,b,c)
        // {
        //   ref.remove();
        //   console.log("hej");
        //   console.log(a,b,c);
        // };


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
