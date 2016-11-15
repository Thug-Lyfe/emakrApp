var eventStash = [
  { name: 'event 1',
    description: "this is event 1 and stuff",
    activities:[
      { name: "activity 1.1",
        description: "this is activity 1 for event 1",
        location: "coordinates xx:yy",
        proximity: 20,
        type: "own pace"},
      { name: "activity 1.2",
        description: "this is activity 2 for event 1",
        location: "coordinates xx:yy",
        proximity: 20,
        type: "multiple choice"},
      { name: "activity 1.3",
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
      { name: "activity 2.1",
        description: "this is activity 1 for event 2",
        location: "coordinates xx:yy",
        proximity: 20,
        type: "own pace"},
      { name: "activity 2.2",
        description: "this is activity 2 for event 2",
        location: "coordinates xx:yy",
        proximity: 20,
        type: "multiple choice"},
      { name: "activity 2.3",
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
      { name: "activity 3.1",
        description: "this is activity 1 for event 3",
        location: "coordinates xx:yy",
        proximity: 20,
        type: "own pace"},
      { name: "activity 3.2",
        description: "this is activity 2 for event 3",
        location: "coordinates xx:yy",
        proximity: 20,
        type: "multiple choice"},
      { name: "activity 3.3",
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
var curEvent = 0;
angular.module('starter.controllers', [])
  .factory('Projects', function() {
    return {
      all: function() {
        return eventStash
      },
      getEvent: function(eventIndex){
        return eventStash[eventIndex];
      },
      getAct: function(eventIndex,actIndex){
        return eventStash[eventIndex].activities[actIndex];
      },
      save: function(projects) {
        //eventStash = angular.toJson(projects);
      },
      newProject: function(projectTitle) {
        // Add a new project
        return {
          name: projectTitle,
          activities: []
        };
      },

      getLastActiveEvent: function() {
        return parseInt(window.localStorage['lastActiveEvent']) || 0;
      },
      setLastActiveEvent: function(index) {
        window.localStorage['lastActiveEvent'] = index;
      },
      getLastActiveAct: function() {
        return parseInt(window.localStorage['lastActiveAct']) || 0;
      },
      setLastActiveAct: function(index) {
        window.localStorage['lastActiveAct'] = index;
      }
    }
  })

  .controller('AppCtrl', function($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate,$stateParams) {


      $scope.getAll = Projects.all();
      $scope.setCur = function(index){
        Projects.setLastActiveEvent(index);
      }
      // $scope.getAct = function(){
      //   if(!$stateParams.eventId || !$stateParams.actId){
      //     return []
      //   }
      //   else
      //     return eventStash[$stateParams.eventId].activities[$stateParams.actId]
      // }

      //$scope.getEvent = eventsStash[$stateParams.eventIndex].activities;
      //   function(){
      //   if(!$stateParams.eventId){
      //     return []
      //   }
      //   else return eventsStash[$stateParams.eventId].activities;
      // }






    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    /*
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
    */
  })

  .controller('eventCtrl', function($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate,$stateParams) {
    $scope.getEvent = Projects.getEvent(Projects.getLastActiveEvent());
    $scope.setAct = function() {
      Projects.setLastActiveAct(index);
    }

    })
  .controller('actCtrl', function($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate,$stateParams) {
    $scope.getAct = Projects.getAct(Projects.getLastActiveEvent(),Projects.getLastActiveAct());
  })

