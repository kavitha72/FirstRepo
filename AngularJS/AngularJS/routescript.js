
var app = angular.module('ngRoutingDemo', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: '/Login.html',
        controller: 'loginController'
    }).when('/student/:username', {
        templateUrl: '/Student.html',
        controller: 'studentController'
    }).otherwise({
        redirectTo: "/"
    });

    app.controller("loginController", function ($scope, $location) {

        $scope.authenticate = function (username) {
            // write authentication code here..

            $location.path('/student/' + username)
        };

    });

    app.controller("studentController", function ($scope, $routeParams) {
        $scope.username = $routeParams.username;
    });

});