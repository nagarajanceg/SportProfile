'use strict';

var ProfileCtrl = function ($scope, $http, $location, dataService) {
    // $scope.about = dataService.getAbout();
    // $scope
    // $scope.partialSubmit = function () {
    //     console.log($scope.about);
    //     dataService.setAbout($scope.about);
    //     $location.path('/social', false);
    // };
} ;
angular.module('myApp.profile', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'profile/profile.html',
            controller: 'ProfileCtrl'
        });

    }])
    .controller('ProfileCtrl', ['$scope','$http', '$location','dataService',ProfileCtrl]);