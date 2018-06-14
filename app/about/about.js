'use strict';

var AboutCtrl = function ($scope, $http) {
    $scope.partialSubmit = function () {
        console.log($scope.about);
    };

} ;
angular.module('myApp.about', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl'
    });
}])
.controller('AboutCtrl', ['$scope','$http',AboutCtrl]);