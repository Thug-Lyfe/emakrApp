angular.module('eventMod', [])
  .controller('eventCtrl', function($scope, $timeout, $ionicModal, Public, $ionicSideMenuDelegate) {
    $scope.getEvent = Public.getEvent(Public.getLastActiveEvent())
  })
