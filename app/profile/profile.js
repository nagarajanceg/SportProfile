'use strict';

var ProfileCtrl = function ($scope, $http, $location, dataService) {
    console.log("Hello profile")
    dataService.getUsers().then(function (res) {
      console.log(res.data);
      // console.log(typeof(data.users));
      $scope.users = res.data.users;
    });
};

angular.module('myApp.profile', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'profile/profile.html',
            controller: 'ProfileCtrl'
        });
    }])
    .controller('ProfileCtrl', ['$scope','$http', '$location','dataService',ProfileCtrl]);