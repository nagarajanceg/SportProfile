
(function () {
    console.log("service")
var dataService = function($http) {
    var mydata = {};

    var setBasic = function (data) {
        mydata.basic = data;
    };
    var getBasic = function () {
        return mydata.basic;
    }
    var getData = function () {
        return mydata;
    };

    var setAbout = function (data) {
      mydata.about = data;
    };

    var getAbout = function () {
        return mydata.about;
    };

    var setSocial = function (data) {
      mydata.social = data;
    };

    var getSocial = function () {
        return mydata.social;
    };
    return{
        setBasic: setBasic,
        getBasic: getBasic,
        getData: getData,
        setAbout: setAbout,
        getAbout: getAbout,
        setSocial: setSocial,
        getSocial: getSocial
    };
};
    console.log(dataService);
var module = angular.module('myApp');
module.factory('dataService', dataService);

}());