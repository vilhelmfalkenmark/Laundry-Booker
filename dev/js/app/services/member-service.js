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
