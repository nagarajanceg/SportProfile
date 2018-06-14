'use strict';
var BasicInfoCtrl = function ($scope, $http) {
    console.log("from Info controller ");

    $scope.partialSubmit = function () {
        console.log("test");
        console.log($scope.basic);
        $http.get("https://api.github.com/users/nagarajanceg")
            .then(function (response) {
                console.log(response.data);
            })
    }

};

angular.module('myApp.info', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/info', {
            templateUrl: 'basicinfo/info.html',
            controller: 'InfoCtrl'
        });
    }])

    .controller('InfoCtrl', ['$scope', '$http', BasicInfoCtrl]);
