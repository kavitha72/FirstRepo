var app = angular.module("myModule", []);
app.controller("parentController", function ($scope, $rootScope) {
    $scope.controllerName = "This is parentController";
    $rootScope.message = "Hello World!";
});
app.controller("childController", function ($scope) {
    $scope.controllerName = "childController";
});
app.controller('siblingController', function ($scope) {

});