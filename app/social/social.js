'use strict';

var SocialCtrl = function ($scope, $http, $location, dataService) {
    console.log("SocialCtrl");
    $scope.partialSubmit = function () {
        console.log($scope.social);
        dataService.setSocial($scope.social);
        $location.path('/summary', false);
    };
} ;
angular.module('myApp.social', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/social', {
            templateUrl: 'social/social.html',
            controller: 'SocialCtrl'
        });
    }])
    .controller('SocialCtrl', ['$scope','$http', '$location','dataService', SocialCtrl]);