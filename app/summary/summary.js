'use strict';

var SummaryCtrl = function ($scope, $http, $location, $anchorScroll, $timeout, dataService) {

    $scope.status = false;

    var dataAvailable = dataService.getData();

    $scope.basic = dataAvailable.basic;
    $scope.about = dataAvailable.about;
    $scope.social = dataAvailable.social;

    var unsetStatus = function () {
        $scope.status = false;
    };

    $scope.editInfo = function () {
        console.log("edit info")
        $location.path('/info', false);
    };

    $scope.editAbout = function () {
        $location.path('/about', false);
    };

    $scope.editSocial = function () {
        $location.path('/social', false);
    };

    $scope.submitAction = function () {
        console.log("submitAction");
        dataService.submitReq().then(function (data) {
            console.log("onsucess response");
            $scope.status = true;
            $location.hash('alertContainer');
            $anchorScroll();
            $timeout(unsetStatus, 5000);
            console.log(data);
        });
        console.log(dataService.getData());
        // $location.path('/summary', false);
    };
};
angular.module('myApp.summary', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/summary', {
            templateUrl: 'summary/summary.html',
            controller: 'SummaryCtrl'
        });
    }])
    .controller('SummaryCtrl', ['$scope', '$http', '$location', '$anchorScroll', '$timeout', 'dataService', SummaryCtrl]);