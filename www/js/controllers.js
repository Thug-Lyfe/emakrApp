var eventsStash = [];
var curEvent = 0;
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('eventCtrl', function($scope, $stateParams) {
  $scope.events = [
    { name: 'event 1',
      description: "this is event 1 and stuff",
      activities:[
        { name: "activity 1",
          description: "this is activity 1 for event 1",
          location: "coordinates xx:yy",
          proximity: 20,
          type: "own pace"},
        { name: "activity 2",
          description: "this is activity 2 for event 1",
          location: "coordinates xx:yy",
          proximity: 20,
          type: "multiple choice"},
        { name: "activity 3",
          description: "this is activity 3 for event 1",
          location: "coordinates xx:yy",
          proximity: 20,
          type: "manual"}],
      date: new Date(),
      JoinCode: "userId1234",
      location: "coordinates xx:yy",
      proximity: 50,
      participants:[{part:"id1"},{part:"id2"},{Part:"id3"}]
    },
    { name: 'event 2',
      description: "this is event 2 and stuff",
      activities:[
        { name: "activity 1",
          description: "this is activity 1 for event 2",
          location: "coordinates xx:yy",
          proximity: 20,
          type: "own pace"},
        { name: "activity 2",
          description: "this is activity 2 for event 2",
          location: "coordinates xx:yy",
          proximity: 20,
          type: "multiple choice"},
        { name: "activity 3",
          description: "this is activity 3 for event 2",
          location: "coordinates xx:yy",
          proximity: 20,
          type: "manual"}],
      date: new Date(),
      JoinCode: "userId1235",
      location: "coordinates xx:yy",
      proximity: 50,
      participants:[{part:"id1"},{part:"id2"},{Part:"id3"}]
    },
    { name: 'event 3',
      description: "this is event 3 and stuff",
      activities:[
        { name: "activity 1",
          description: "this is activity 1 for event 3",
          location: "coordinates xx:yy",
          proximity: 20,
          type: "own pace"},
        { name: "activity 2",
          description: "this is activity 2 for event 3",
          location: "coordinates xx:yy",
          proximity: 20,
          type: "multiple choice"},
        { name: "activity 3",
          description: "this is activity 3 for event 3",
          location: "coordinates xx:yy",
          proximity: 20,
          type: "manual"}],
      date: new Date(),
      JoinCode: "userId4321",
      location: "coordinates xx:yy",
      proximity: 50,
      participants:[{part:"id1"},{part:"id2"},{Part:"id3"}]
    }
  ];
eventsStash = $scope.events;



})
  .config(function($stateProvider){
    $stateProvider
      .state('activities',{
        url:'/activities/:eventId',
        templateUrl: 'menu-items/activities.html',
        controller: function($scope,$stateParams){
          console.log($stateParams)
          console.log(eventsStash[$stateParams.eventId])
          $scope.event = eventsStash[$stateParams.eventId];
          curEvent = $stateParams.eventId;
        }
      })
      .state('activity',{
        url:'/activity/:actId',
        templateUrl: 'menu-items/activity.html',
        controller: function($scope,$stateParams){
          console.log($stateParams)
          console.log(eventsStash[$stateParams.actId])
          $scope.act = eventsStash[curEvent].activities[$stateParams.actId];

        }
      })
  })



.controller('activitiesCtrl', function($scope, $stateParams) {

});
