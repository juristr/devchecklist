'use strict';

/**
 * @ngdoc overview
 * @name devchecksApp
 * @description
 * # devchecksApp
 *
 * Main module of the application.
 */
angular
  .module('devchecksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',

    // features
    'dashboard',
    'checklist'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/dashboard");
    //
    // Now set up the states
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'scripts/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      })
      .state('checklist', {
        url: '/checklist',
        templateUrl: 'scripts/checklist/checklist.html',
        controller: 'ChecklistController',
        controllerAs: 'vm'
      });
      // .state('state1.list', {
      //   url: "/list",
      //   templateUrl: "partials/state1.list.html",
      //   controller: function($scope) {
      //     $scope.items = ["A", "List", "Of", "Items"];
      //   }
      // })
      // .state('state2', {
      //   url: "/state2",
      //   templateUrl: "partials/state2.html"
      // })
      // .state('state2.list', {
      //   url: "/list",
      //   templateUrl: "partials/state2.list.html",
      //   controller: function($scope) {
      //     $scope.things = ["A", "Set", "Of", "Things"];
      //   }
      // });


    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });