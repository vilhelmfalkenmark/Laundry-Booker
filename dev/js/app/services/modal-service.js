/*
Angular services are substitutable objects that are wired together
using dependency injection (DI).
You can use services to organize and share code across your app.
*/
(function() {
  'use strict';
  angular.module('booker')
      .service('ModalService', [ModalService]);

  function ModalService()
  {
      return {
      test: test,
      };
    function test(index)
    {
        //console.log("hej")

         var container = document.getElementsByClassName('container')[0];
        console.log(index);

        return index;

    }
  }



})();
