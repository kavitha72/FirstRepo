var app = angular.module('myAngularApp', []);
app.controller("firstController", function ($scope) {
    $scope.message = "This is first controller";
    $scope.showMsg = function (msg) {
        alert(msg);
    };
});
    app.controller("secondController", function ($scope) {
        $scope.student = "Hello World!";
       
    
});