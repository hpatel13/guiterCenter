'use strict';

/**
 * @ngdoc function
 * @name guitercenterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guitercenterApp
 */
angular.module('guitercenterApp')
  .controller('MainCtrl', function ($scope,$http,$location,shareddata) {
     $scope.images=[];
      $http.get('data/guitardata.json')
      .success(function(resp){
        $scope.images = resp.allProducts;
        $scope.buyThisProduct = function($index){
    shareddata.myindex =   $scope.images[$index];
      $location.path('/product');
    };
      });

  });
