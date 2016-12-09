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
  .controller('myEventsCtrl', function($rootScope,$scope, $timeout, $ionicModal, Private, $ionicSideMenuDelegate,$ionicPopup) {

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


  })
  .controller('myEventCtrl', function($rootScope, $scope, $timeout, $ionicModal, Private, $ionicSideMenuDelegate,$ionicPopup) {



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

  })
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


