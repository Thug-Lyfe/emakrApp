var eventStashP = [
  { name: 'private event 1',
    description: "this is private event 1 and stuff",
    activities:[
      { name: "activity 1.1",
        description: "this is activity 1 for event 1",
        location: "coordinates xx:yy",
        proximity: 0,
        type: "own pace"},
      { name: "activity 1.2",
        description: "this is activity 2 for event 1",
        location: "coordinates xx:yy",
        proximity: 0,
        type: "multiple choice"},
      { name: "activity 1.3",
        description: "this is activity 3 for event 1",
        location: "coordinates xx:yy",
        proximity: 0,
        type: "manual"}],
    date: new Date(),
    JoinCode: "userId1234",
    location: "coordinates xx:yy",
    proximity: 3,
    participants:[{part:"id1"},{part:"id2"},{Part:"id3"}]
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
        type: "manual"}],
    date: new Date(),
    JoinCode: "userId1235",
    location: "coordinates xx:yy",
    proximity: 2,
    participants:[{part:"id1"},{part:"id2"},{Part:"id3"}]
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
    participants:[{part:"id1"},{part:"id2"},{Part:"id3"}]
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
  'ownPace':"Participants will be able to go through activities as they please",
  'manual':"Participants will request when they want to go to next activity, where you will be required to approve said request",
  'multipleChoice':"Participants will answer a question, this process is automated"
}
angular.module('starter.controllers', [])
  //public factory & controllers
  .factory('Public', function() {
    return {

      onLogin: function(){
        // rest call set private events (delete when rest calls implemented)
        window.localStorage['privateEvents'] = angular.toJson(eventStashP);
      },
      all: function() {
        var restGetPublicEvents = eventStash;
        window.localStorage['publicEvents'] = angular.toJson(restGetPublicEvents);
        if(restGetPublicEvents) {
          window.localStorage['publicEvents'];
          return restGetPublicEvents;
        }
        return [];

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

  .controller('eventCtrl', function($scope, $timeout, $ionicModal, Public, $ionicSideMenuDelegate) {
    $scope.getEvent = Public.getEvent(Public.getLastActiveEvent());
    $scope.setAct = function() {
      Public.setLastActiveAct(index);
    }

    })

  .controller('actCtrl', function($scope, $timeout, $ionicModal, Public, $ionicSideMenuDelegate) {
    $scope.getAct = Public.getAct(Public.getLastActiveEvent(),Public.getLastActiveAct());
    $scope.getTypeDesc = function(type){
      if(type.toLowerCase() === ("own pace")){
        return typeDesc.ownPace
      }
      if(type.toLowerCase() === ("manual"||"manuel")){
        return typeDesc.manual
      }
      if(type.toLowerCase() === ("multiple choice")){
        return typeDesc.multipleChoice
      }
      return;
    }
  })



  //private factory & controllers
  .factory('Private', function() {
    return {

      all: function() {
        var eventString = window.localStorage['privateEvents'];
        if(eventString) {
          console.log(angular.fromJson(eventString));
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
      getAct: function(eventIndex,actIndex){
        var actString = window.localStorage['privateEvents'];
        if(actString) {
          return angular.fromJson(actString)[eventIndex].activities[actIndex];
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
  .controller('myEventsCtrl', function($scope, $timeout, $ionicModal, Private, $ionicSideMenuDelegate,$ionicPopup) {

    $scope.getAll = Private.all();
    $scope.setCur = function(index){
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
          Private.newEvent($scope.getAll,res)
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

  })
  .controller('myEventCtrl', function($scope, $timeout, $ionicModal, Private, $ionicSideMenuDelegate) {
    $scope.getEvent = Private.getEvent(Private.getLastActiveEvent());
    $scope.setAct = function() {
      Private.setLastActiveAct(index);
    }
    $scope.proxies = [
      {value: 1, text: '0 meters'},
      {value: 2, text: '10 meters'},
      {value: 3, text: '25 meters'},
      {value: 4, text: '50 meters'},
      {value: 5, text: '100 meters'}
    ];
    $scope.getJoinCode = $scope.getEvent.JoinCode.substring(6)

    $scope.saveEvent2 = function() {
      return Private.saveEvent($scope.getJoinCode, Private.all(), $scope.getEvent, Private.getLastActiveEvent())
    }

    $scope.saveEvent = function() {
      // $scope.user already updated!
      return $http.post('/saveEvent', $scope.getEvent).error(function(err) {
        if(err.field && err.msg) {
          // err like {field: "name", msg: "Server-side error for this username!"}
          $scope.editableForm.$setError(err.field, err.msg);
        } else {
          // unknown error
          $scope.editableForm.$setError('desc', 'Unknown error!');
        }
      });
    };

  })
  .controller('myActCtrl', function($scope, $timeout, $ionicModal, Private, $ionicSideMenuDelegate) {
    $scope.getAct = Private.getAct(Private.getLastActiveEvent(),Private.getLastActiveAct());
    $scope.getTypeDesc = function(type){
      if(type.toLowerCase() === ("own pace")){
        return typeDesc.ownPace
      }
      if(type.toLowerCase() === ("manual"||"manuel")){
        return typeDesc.manual
      }
      if(type.toLowerCase() === ("multiple choice")){
        return typeDesc.multipleChoice
      }
      return;
    }
  })


