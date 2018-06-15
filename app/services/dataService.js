
(function () {
    console.log("service")
var dataService = function($http) {
    var mydata = {};

    var setBasic = function (data) {
        mydata.basic = data;
        console.log("setDaaaaaaaataa",data);
    };

    var getData = function () {
        return mydata;
    };

    var setAbout = function (data) {
      mydata.about = data;
    };
    var setSocial = function (data) {
      mydata.social = data;
    };
    return{
        setBasic: setBasic,
        getData: getData,
        setAbout: setAbout,
        setSocial: setSocial
    };
};
    console.log(dataService);
var module = angular.module('myApp');
module.factory('dataService', dataService);

}())