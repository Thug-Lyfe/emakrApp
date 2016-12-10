angular.module('myEventMod', [])
  .controller('myEventCtrl', function($rootScope, $scope, $timeout, $ionicModal, Private, $ionicSideMenuDelegate,$ionicPopup,$ionicListDelegate) {



    $scope.proxies = [
      {value: 1, text: '0 meters'},
      {value: 2, text: '10 meters'},
      {value: 3, text: '25 meters'},
      {value: 4, text: '50 meters'},
      {value: 5, text: '100 meters'}
    ];
    $scope.isButton = false;
    $scope.swapButton = function(){
      $scope.isButton = !$scope.isButton;
    }


    $scope.getEvent = Private.getEvent(Private.getLastActiveEvent());
    $scope.getJoinCode = $scope.getEvent.JoinCode.substring(6)
    $scope.saveEvent = function() {
      $scope.getEvent = Private.saveEvent($scope.getJoinCode, Private.all(), $scope.getEvent, Private.getLastActiveEvent())
    }

    $scope.cancelSave = function(){
      $scope.getEvent = Private.getEvent(Private.getLastActiveEvent());
    }

    $scope.setAct = function(index) {
      Private.setLastActiveAct(index);
    }
    $scope.newAct = function(){
      console.log("step 0")
      $ionicPopup.prompt({
        title: 'New Activity',
        template: "Activity Name",
        inputPlaceholder: "name",
        okText: "Create Activity"
      }).then(function(res){
        if(res) {
          $scope.getEvent.activities.push({
            name: res,
            description: "",
            location: "(locationPicker)",
            proximity: 0,
            type: 0
          })
          // return Private.newAct(Private.all(),Private.getLastActiveEvent(),res)
        }})
      // .then(function(event){
      // if(event) {
      //   $scope.getEvent = event;
      // }})
    };
    $scope.deleteAct = function(ActName, index) {
      $ionicPopup.confirm({
        title: 'Delete ' + ActName + ' ?',
        okText: "Delete"
      }).then(function (res) {
        if (res) {
          $scope.getEvent.activities.splice(index,1)
          //Private.deleteAct(Private.all(), Private.getLastActiveEvent(),index)
        }})
      // .then(function (event) {
      // if (event) {
      //   $scope.getEvent = event;
      // }})
    };
    $scope.duplicate = function(index){
      var act = $scope.getEvent.activities[index];
      $scope.getEvent.activities.push(
        {
          name: act.name + "(d)",
          description: act.description,
          location: act.location,
          proximity: act.proximity
        })
      //$scope.getEvent = Private.duplicateAct(Private.all(),Private.getLastActiveEvent(),$scope.getEvent.activities[index]);
    }



    $scope.moveItem = function(item,fromIndex, toIndex) {
      //Move the item in the array
      $scope.getEvent.activities.splice(fromIndex, 1);
      $scope.getEvent.activities.splice(toIndex, 0, item);

    };

    var oldSoftBack = $rootScope.$ionicGoBack;
    $rootScope.$ionicGoBack = function() {
      console.log("yolo2");
      $scope.getEvent = $scope.getEvent = Private.getEvent(Private.getLastActiveEvent());
      oldSoftBack();
      $rootScope.$ionicGoBack = oldSoftBack;
    };

    $scope.setState = function(){
      Private.setPreviewState(0)
      $ionicListDelegate.closeOptionButtons()
    }

  })
