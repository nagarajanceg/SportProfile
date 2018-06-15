'use strict';

var AboutCtrl = function ($scope, $http, $location, dataService) {
    $scope.about = dataService.getAbout();
    $scope.partialSubmit = function () {
        console.log($scope.about);
        dataService.setAbout($scope.about);
        $location.path('/social', false);
    };
} ;
angular.module('myApp.about', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutCtrl'
    });

}])
.controller('AboutCtrl', ['$scope','$http', '$location','dataService',AboutCtrl]);