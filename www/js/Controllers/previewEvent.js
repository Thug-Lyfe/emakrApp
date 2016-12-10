/**
 * Created by marco on 10-12-2016.
 */
angular.module('previewEventMod', [])
  .controller('previewEventCtrl', function($scope, $timeout, $ionicModal, Preview, $ionicSideMenuDelegate) {
    $scope.getEvent = Preview.getEvent();

  })
