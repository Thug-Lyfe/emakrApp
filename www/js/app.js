// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ion-floating-menu', 'starter.controllers', 'xeditable'])

.run(function($ionicPlatform, editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
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
    .state('app.event', {
      url: '/event',
      views: {
         'menuContent': {
      templateUrl: 'menu-items/event.html',
      controller: 'eventCtrl'
         }
      }
    })
    .state('app.activity',{
      url:'/activity',
      views: {
        'menuContent': {
          templateUrl: 'menu-items/activity.html',
          controller: 'actCtrl'
        }
      }
    })
    .state('app.myEvents',{
      url:'/myEvents',
      views: {
        'menuContent': {
          templateUrl: 'menu-items/myEvents.html',
          controller: 'myEventsCtrl'
        }
      }
    })
    .state('app.myEvent',{
      url:'/myEvent',
      views: {
        'menuContent': {
          templateUrl: 'menu-items/myEvent.html',
          controller: 'myEventCtrl'
        }
      }
    })
    .state('app.myActivity',{
      url:'/myActivity',
      views: {
        'menuContent': {
          templateUrl: 'menu-items/myActivity.html',
          controller: 'myActCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
