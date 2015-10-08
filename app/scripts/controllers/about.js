'use strict';

/**
 * @ngdoc function
 * @name guitercenterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guitercenterApp
 */
angular.module('guitercenterApp')
  .controller('AboutCtrl', function (shareddata,$scope) {
    $scope.imageforthispage=shareddata.myindex;
  });
