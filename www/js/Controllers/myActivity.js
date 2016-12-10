angular.module('myActivityMod', [])
.controller('myActCtrl', function($scope, $timeout, $ionicModal, Private, $ionicSideMenuDelegate) {
  $scope.getAct = Private.getAct(Private.getLastActiveEvent(),Private.getLastActiveAct());
  $scope.getTypeDesc = function(type){
    if(type == 1){
      return typeDesc.multipleChoice
    }
    if(type == 2){
      return typeDesc.vote
    }

    return;
  }

  $scope.proxies = [
    {value: 1, text: '0 meters'},
    {value: 2, text: '10 meters'},
    {value: 3, text: '25 meters'},
    {value: 4, text: '50 meters'},
    {value: 5, text: '100 meters'}
  ];

  $scope.types = [
    {value: 1, text: 'Multiple Choice'},
    {value: 2, text: 'Vote'}
  ]

  $scope.saveAct = function() {
    return Private.saveAct(Private.all(), $scope.getAct, Private.getLastActiveEvent(),Private.getLastActiveAct())
  }

  $scope.setAns = function (index) {
    $scope.getAct.ans = index;
  }

  $scope.moveItem = function(item,fromIndex, toIndex,isAns) {
    //Move the item in the array
    $scope.getAct.options.splice(fromIndex, 1);
    $scope.getAct.options.splice(toIndex, 0, item);

    if(isAns){
      $scope.getAct.ans = toIndex;
    }
  };


  $scope.getEdit = false;
  $scope.setEdit = function(state){
    $scope.getEdit = state;
  }

  $scope.deleteOption = function(index) {
    $scope.getAct.options.splice(index,1)
  };

  $scope.newOption = function () {
    $scope.getAct.options.push("option " + ($scope.getAct.options.length+1))
  }

  $scope.cancel = function(){
    $scope.getAct = Private.getAct(Private.getLastActiveEvent(),Private.getLastActiveAct());
  }

  // $scope.getReorder = false;
  // $scope.setReorder = function(state){
  //   $scope.getReorder = state;
  // }

})
