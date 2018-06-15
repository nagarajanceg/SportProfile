'use strict';

var ProfileCtrl = function ($scope, $http, $location, dataService) {
    console.log("Hello profile")
} ;
angular.module('myApp.profile', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'profile/profile.html',
            controller: 'ProfileCtrl'
        });

    }])
    .controller('ProfileCtrl', ['$scope','$http', '$location','dataService',ProfileCtrl]);