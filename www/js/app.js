// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'calc.controllers','starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:
  .state('tab.wiki', {
      url: '/wiki',
      views: {
        'tab-wiki': {
          templateUrl: 'templates/tab-wiki.html',
          controller: 'WikiCtrl'
        }
      }
  })

  .state('tab.calc', {
      url: '/calc',
      views: {
        'tab-calc': {
          templateUrl: 'templates/tab-calc.html',
          controller: 'CalcCtrl'
        }
      }
  })

  .state('tab.calcDetails', {
      url: '/calc/:calcId',
      views: {
        'tab-calc': {
          templateUrl: 'templates/calc-detail.html',
          controller: 'CalcDetailCtrl'
        },
        '0@tab.calcDetails': {
          templateUrl: 'templates/calculators/0.html',
          controller: 'dvCtrl'
        },
        '1@tab.calcDetails': {
          templateUrl: 'templates/calculators/1.html',
          controller: 'phaseCtrl'
        }
      }
  })

  .state('tab.planets', {
      url: '/planets',
      views: {
        'tab-planets': {
          templateUrl: 'templates/tab-planets.html',
          controller: 'PlanetsCtrl'
        }
      }
  })

    .state('tab.planetDetails', {
        url: '/planets/:planetId',
        views: {
          'tab-planets': {
            templateUrl: 'templates/planet-detail.html',
            controller: 'PlanetsDetailCtrl'
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/planets');

});
