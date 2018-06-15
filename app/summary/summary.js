'use strict';

var SummaryCtrl = function ($scope, $http, $location, dataService) {
    console.log("Summary");
    console.log(dataService.getData());
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