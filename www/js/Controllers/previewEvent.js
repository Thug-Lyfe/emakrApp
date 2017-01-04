/**
 * Created by marco on 10-12-2016.
 */
angular.module('previewEventMod', [])
  .controller('previewEventCtrl', function($scope, $timeout, $ionicModal, Preview, $ionicSideMenuDelegate) {
    $scope.getEvent = Preview.getEvent();

    $scope.proxies = [
      'Not Set',
      '0 meters',
      '10 meters',
      '25 meters',
      '50 meters',
      '100 meters'
    ];
    $scope.getProxy = function(index){

    }

  })
