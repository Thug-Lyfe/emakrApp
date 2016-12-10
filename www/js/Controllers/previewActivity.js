/**
 * Created by marco on 10-12-2016.
 */
angular.module('previewActivityMod', [])
  .factory('Preview', function() {
    return {
    getEvent: function(){
      var eventString = window.localStorage['privateEvents'];
      var lastEvent = window.localStorage['lastActiveEvent'];
      if(eventString) {
        if(lastEvent){
        return angular.fromJson(eventString)[lastEvent];
      }
      }
      return {};

    },
      setPreviewState: function(index){
        window.localStorage['previewState'] = index;
      },
      getPreviewState: function(){
        return parseInt(window.localStorage['previewState']) || 0;
      },
    getLastPreviewAct: function() {
      return parseInt(window.localStorage['lastActiveAct']) || 0;
    },
    setLastPreviewAct: function(index) {
      window.localStorage['lastActiveAct'] = index;
    }
  }})
    .controller('previewActivityCtrl', function($scope, $timeout, $ionicModal, Preview, $ionicSideMenuDelegate,$ionicHistory) {
      var event = Preview.getEvent();
      var state = Preview.getPreviewState();
      if(state !== 0){
        Preview.setLastPreviewAct(0);
      }
      var index = Preview.getLastPreviewAct();


      $scope.ans = -1;
      $scope.isPas = false;
      $scope.getAct = event.activities[index];

      $scope.chooseAns = function(index){
        $scope.ans = index;
        $scope.isPas = true;
      }

      $scope.goNext = function(){
        $scope.ans = -1;
        if(state === 0) {
          $ionicHistory.goBack(-1)
        }
        else{

        if(index >= event.activities.length-1){
          $ionicHistory.goBack(-2)
        }
        else {
          index = Preview.getLastPreviewAct()+1;
          Preview.setLastPreviewAct(index);
          $scope.isPas = false
          $scope.getAct = event.activities[index];

        }
        }
      }

      $scope.indexToLetter = function (index) {
        return String.fromCharCode(97 + index)
      }

    })
