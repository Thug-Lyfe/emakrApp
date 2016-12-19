var eventStashP = [
  { name: 'president quiz',
    description: "This is a quiz about politics in the USA",
    activities:[
      { name: "President of USA",
        description: "Who is the current President if the USA?",
        location: "coordinates xx:yy",
        proximity: 0,
        type: 1,
        options: ["Donald Trump","Barrack Obama","Mitt Romney","Hillary Clinton"],
        ans: 1 },
      { name: "Vice President of Usa",
        description: "this is activity 2 for event 1",
        location: "coordinates xx:yy",
        proximity: 0,
        type: 1,
        options: ["Donald Trump","Mike Pence","Sarah Palin","Joe Biden"],
        ans: 1 },
      { name: "The next Vice president",
        description: "Who is the next vice president of the USA",
        location: "coordinates xx:yy",
        proximity: 0,
        type: 1,
        options: ["Donald Trump","Mike Pence","Sarah Palin","Joe Biden"],
        ans: 1 },
    ],
    date: new Date(),
    JoinCode: "userId1234",
    location: "coordinates xx:yy",
    proximity: 3,
    participants:[]
  },
  { name: 'private event 2',
    description: "this is private event 2 and stuff",
    activities:[
      { name: "activity 2.1",
        description: "this is activity 1 for event 2",
        location: "coordinates xx:yy",
        proximity: 0,
        type: "own pace"},
      { name: "activity 2.2",
        description: "this is activity 2 for event 2",
        location: "coordinates xx:yy",
        proximity: 0,
        type: "multiple choice"},
      { name: "activity 2.3",
        description: "this is activity 3 for event 2",
        location: "coordinates xx:yy",
        proximity: 0,
        type: 1}],
    date: new Date(),
    JoinCode: "userId1235",
    location: "coordinates xx:yy",
    proximity: 2,
    participants:[]
  },
  { name: 'private event 3',
    description: "this is private event 3 and stuff",
    activities:[
      { name: "activity 3.1",
        description: "this is activity 1 for event 3",
        location: "coordinates xx:yy",
        proximity: 0,
        type: "own pace"},
      { name: "activity 3.2",
        description: "this is activity 2 for event 3",
        location: "coordinates xx:yy",
        proximity: 0,
        type: "multiple choice"},
      { name: "activity 3.3",
        description: "this is activity 3 for event 3",
        location: "coordinates xx:yy",
        proximity: 0,
        type: "manual"}],
    date: new Date(),
    JoinCode: "userId4321",
    location: "coordinates xx:yy",
    proximity: 4,
    participants:[]
  }
];
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
var typeDesc = {
  'vote':"(participants will vote, statistics for these votes can then be seen by the creator)",
  'multipleChoice':"(Participants will answer a question, this process is automated)"
}
angular.module('starter.controllers', [])
  //public factory & controllers
  .factory('Public', function() {
    return {

      onLogin: function(){
        // rest call set private events (delete when rest calls implemented)

        var pee = window.localStorage['privateEvents']
        if(!pee){
          window.localStorage['privateEvents'] = angular.toJson(eventStashP);
          console.log("getting your Privates")
        }


      },
      all: function() {

        var restGetPublicEvents = window.localStorage['publicEvents'];
        if(!restGetPublicEvents){
          restGetPublicEvents = eventStash;
          window.localStorage['publicEvents'] = angular.toJson(restGetPublicEvents);
        }
        else{
          restGetPublicEvents = angular.fromJson(restGetPublicEvents);
        }

          return restGetPublicEvents;

      },
      getEvent: function(eventIndex){
        var eventString = window.localStorage['publicEvents'];
        if(eventString) {
          return angular.fromJson(eventString)[eventIndex];
        }
        return {};

      },
      getAct: function(eventIndex,actIndex){
        var actString = window.localStorage['publicEvents'];
        if(actString) {
          return angular.fromJson(actString)[eventIndex].activities[actIndex];
        }
        return [];
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

  .controller('AppCtrl', function($scope, $timeout, $ionicModal, Public, $ionicSideMenuDelegate) {
    // public events
    $scope.getAll = Public.all();
    $scope.setCur = function(index){
      Public.setLastActiveEvent(index);
    };




    // private events
    $scope.loggedin = false;
      $scope.setCur = function(index){
        Public.setLastActiveEvent(index);
      };

      $scope.loginData = {};

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('modals/login.html', {
        scope: $scope,
        animation: 'slide-in-up'
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
        Public.onLogin();
        $scope.loggedin = true;

        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };


      $scope.logout = function () {
        $scope.loggedin =false;
      }

  })

   //private factory & controllers
  .factory('Private', function() {
    return {

      all: function() {
        var eventString = window.localStorage['privateEvents'];
        if(eventString) {

          return angular.fromJson(eventString)
        }
        return [];

      },
      getEvent: function(eventIndex){
        var eventString = window.localStorage['privateEvents'];
        if(eventString) {
          return angular.fromJson(eventString)[eventIndex];
        }
        return {};

      },

      newEvent: function(all,eventName) {
        // Add a new event
        var restCallNewEvent = true
        if(restCallNewEvent){
          all.push({ name: eventName,
            description: "",
            activities:[],
            date: new Date(),
            JoinCode: "(CreateJoinCode(user))",
            location: "",
            proximity: 0,
            participants: []
          })
          window.localStorage['privateEvents'] = angular.toJson(all);
        }
        return all;
      },
      duplicateEvent: function(all,event){
        var newEvent = {
          name: event.name + "(d)",
          description: event.description,
          activities:event.activities,
          date: new Date(),
          JoinCode: "(CreateJoinCode(user))",
          location: event.location,
          proximity: event.proximity,
          participants: []
        }
        var restCallNewEvent = true
        if(restCallNewEvent){
          all.push(newEvent)
          window.localStorage['privateEvents'] = angular.toJson(all);
        }
        return all;
      },
      saveEvent: function(joinCode, all, event, index){
        event.joinCode = "userId" + joinCode;
        all[index] = event;
        window.localStorage['privateEvents'] = angular.toJson(all);
        return event;
      },
      deleteEvent: function(all,index){

        var restCallDelete = true
        if(restCallDelete){
          all.splice(index,1);
          window.localStorage['privateEvents'] = angular.toJson(all);
        }
        return all;
      },

      newAct: function(all,index,ActName) {
        // Add a new event

        var restCallNewAct = true
        if(restCallNewAct){
          all[index].activities.push({
              name: ActName,
              description: "",
              location: "(locationPicker)",
              proximity: 0,
              type: 0
          })
          window.localStorage['privateEvents'] = angular.toJson(all);
        }
        return all[index];
      },
      duplicateAct: function(all,index,act){
        var newAct = {
          name: act.name + "(d)",
          description: act.description,
          location: act.location,
          proximity: act.proximity
        }
        var restCallNewAct = true
        if(restCallNewAct){
          all[index].activities.push(newAct)
          window.localStorage['privateEvents'] = angular.toJson(all);
        }
        return all[index];
      },
      deleteAct: function(all,eventIndex,index){

        var restCallDelete = true
        if(restCallDelete){
          all[eventIndex].activities.splice(index,1);
          window.localStorage['privateEvents'] = angular.toJson(all);
        }
        return all[eventIndex];
      },
      saveAct: function(all, act, eventIndex, ActIndex){
        all[eventIndex].activities[ActIndex] = act;
        window.localStorage['privateEvents'] = angular.toJson(all);
        return act;

      },
      getAct: function(eventIndex,actIndex){
        var actString = window.localStorage['privateEvents'];
        if(actString) {
          return angular.fromJson(actString)[eventIndex].activities[actIndex];
        }
        return {};
      },



      setPreviewState: function(index) {
        window.localStorage['previewState'] = index;
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

