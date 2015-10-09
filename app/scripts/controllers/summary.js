'use strict';

/**
 * @ngdoc function
 * @name guitercenterApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the guitercenterApp
 */
angular.module('guitercenterApp')
  .controller('SummaryCtrl', function (shareddata,$scope,summaryshare,$location) {
     $scope.imageforsummarypage=shareddata.myindex;
     $scope.summarypagefirstname=summaryshare.firstname;
       $scope.summarypagelastname=summaryshare.lastname;
         $scope.summarypageemail=summaryshare.email;
         $scope.gotohome=function(){
            $location.path('/home');
         };
  });
