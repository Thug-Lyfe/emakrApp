// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
//flyt ting fra controller hertil med callbacks
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: '' +
    'menu-items/menu.html',
    controller: 'AppCtrl'
  })



  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'menu-items/home.html'
        }
      }
    })
    .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'menu-items/events.html',
          controller: 'AppCtrl'
        }
      }
    })
    .state('activities', {
      url: '/activities/:eventIndex',
      // views: {
      //   'menuContent': {
      templateUrl: 'menu-items/activities.html',
      controller:
        'ActsCtrl'
    // }}
})
    //     function($scope,$stateParams){
    //     console.log($stateParams)
    //     console.log(eventsStash[$stateParams.eventId])
    //     $scope.event = eventsStash[$stateParams.eventId];
    //     curEvent = $stateParams.eventId;
    //   }
    // }}})
    .state('app.activity',{
      url:'/activity/:eventIndex/:actIndex',
      templateUrl: 'menu-items/activity.html',
      controller: 'AppCtrl'
      //   function($scope,$stateParams){
      //   console.log($stateParams)
      //   console.log(eventsStash[$stateParams.actId])
      //   $scope.act = eventsStash[curEvent].activities[$stateParams.actId];
      // }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/events');
});
