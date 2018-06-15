'use strict';

var SummaryCtrl = function ($scope, $http, $location, dataService) {
    console.log("Summary");
    console.log(dataService.getData());
    var dataAvailable = dataService.getData();
    $scope.basic = dataAvailable.basic;
    $scope.about = dataAvailable.about;
    $scope.social = dataAvailable.social;
    $scope.editInfo = function () {
        console.log("edit info")
        $location.path('/info', false);
    };
    $scope.editAbout= function () {
      $location.path('/about', false);
    };
    $scope.editSocial= function () {
        $location.path('/social', false);
    };
    $scope.partialSubmit = function () {
        console.log(dataService.getData());
        // dataService.setSocial($scope.social);
        // $location.path('/summary', false);
    };
} ;
angular.module('myApp.summary', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/summary', {
            templateUrl: 'summary/summary.html',
            controller: 'SummaryCtrl'
        });
    }])
    .controller('SummaryCtrl', ['$scope','$http', '$location','dataService', SummaryCtrl]);