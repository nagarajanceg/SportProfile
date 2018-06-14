'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  // 'angular1.ui.bootstrap4',
  'myApp.version',
    'myApp.info',
    'myApp.about'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/info'});
}]);
