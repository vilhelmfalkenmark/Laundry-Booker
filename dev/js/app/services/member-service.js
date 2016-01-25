(function() {
  'use strict';
  angular.module('booker')
    .service('MemberService', ['$http', MemberService]);

    function MemberService($http){

      return {
        getMembers: getMembers
      };

      function getMembers(){
        return $http.get('./js/members/members.json')
        .then(function(res) {
          console.log(res.data);
          return res.data;
        }, function(err) {
          console.log(err);
        });
      }
    }
})();
