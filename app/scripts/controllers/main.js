'use strict';

/**
 * @ngdoc function
 * @name guitercenterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guitercenterApp
 */
angular.module('guitercenterApp')
  .controller('MainCtrl', function ($scope) {
     $scope.images = [{
    src: 'img1.jpg',
    title: 'Pic 1'
  }, {
    src: 'img2.jpg',
    title: 'Pic 2'
  }, {
    src: 'img3.jpg',
    title: 'Pic 3'
  }, {
    src: 'img4.jpg',
    title: 'Pic 4'
  }];



  });
