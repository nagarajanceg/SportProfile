'use strict';

var SocialCtrl = function ($scope, $http) {
    console.log("SocialCtrl");
    $scope.partialSubmit = function () {
        console.log($scope.social);
    };

} ;
angular.module('myApp.social', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/social', {
            templateUrl: 'social/social.html',
            controller: 'SocialCtrl'
        });
    }])
    .controller('SocialCtrl', ['$scope','$http',SocialCtrl]);