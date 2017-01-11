/**
 * Created by marco on 10-12-2016.
 */
angular.module('myEventsMod', [])
  .controller('myEventsCtrl', function($rootScope,$scope, $timeout, $ionicModal, Private, $ionicSideMenuDelegate,$ionicPopup,$ionicListDelegate) {


    $scope.getAll = Private.all();

    $scope.setEvent = function(index){
      Private.setLastActiveEvent(index);
    };
    $scope.newEvent = function(){
      $ionicPopup.prompt({
        title: 'New Event',
        template: "Event Name",
        inputPlaceholder: "Event name",
        okText: "Create Event"
      }).then(function(res){
        if(res) {
          return Private.newEvent($scope.getAll,res)
        }}).then(function(all){
        if(all) {
          $scope.getAll = all;
        }})

    };
    $scope.deleteEvent = function(eventName, index) {
      $ionicPopup.confirm({
        title: 'Delete ' + eventName + ' ?',
        okText: "Delete"
      }).then(function (res) {
        if (res) {
          Private.deleteEvent($scope.getAll, index)
        }
      }).then(function (all) {
        if (all) {
          $scope.getAll = all;
        }
      })
    };
    $scope.duplicate = function(index){
      $scope.getAll = Private.duplicateEvent($scope.getAll,$scope.getAll[index]);
    }

    var oldSoftBack = $rootScope.$ionicGoBack;
    $rootScope.$ionicGoBack = function() {
      console.log("yolo1");
      $scope.getAll = Private.all();
      oldSoftBack();
      $rootScope.$ionicGoBack = oldSoftBack;
    };

    $scope.setState = function(){
      Private.setPreviewState(1)
      $ionicListDelegate.closeOptionButtons()
    }
  })
