/// <reference path="C:\kv\AngularJS\AngularJS\scripts/angular.js" />

var app = angular.module('studentApp', []);

app.config(function ($provide) {
    
    $provide.decorator('$exceptionHandler', function ($delegate) {

        return function (exception, cause) {
            $delegate(exception, cause);

            alert('Error occurred! Please contact admin.');
        };
    });
});

app.controller("studentController", function ($scope) {

    var onSuccess = function (response) {
        $scope.status = response.status;
        $scope.data = response.data;

    };

    var onError = function (response) {
        $scope.status = response.status;
        $scope.data = response.data;

    }
    $scope.getStudent = function () {
        $http.get("/getdata").then(onSuccess, onError);

    };
});