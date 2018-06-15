'use strict';

var BasicInfoCtrl = function ($scope, $http, $location, dataService) {
    console.log("from Info controller ");
    $scope.sportsList = [
        {name: 'Golf'},
        {name:'Tennis'},
        {name:'Cricket'},
        {name:'Baseball'},
        {name:'Basketball'},
        {name:'American Football'},
        {name:'Badminton'},
        {name:'Cycling'}
    ]
    $scope.getSelectedItems = function(item){
        return item.selected;
    };
    $scope.basic = dataService.getBasic();
    $scope.partialSubmit = function () {
        console.log("test");
        console.log($scope.basic);
        $http.get("http://localhost:3000/hello")
            .then(function (response) {
               console.log(response);
            });

        // console.log(dataService);
        dataService.setBasic($scope.basic);
        $location.path('/about', false);
        // $http.post("http://localhost:3000/basicInfo", $scope.basic)
        //     .then(function (response) {
        //        console.log(response);
        //         $location.path('/about', false)
        //     });
    }
};

angular.module('myApp.info', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/info', {
            templateUrl: 'basicinfo/info.html',
            controller: 'InfoCtrl'
        });
    }])

    .controller('InfoCtrl', ['$scope', '$http', '$location', 'dataService', BasicInfoCtrl]);
