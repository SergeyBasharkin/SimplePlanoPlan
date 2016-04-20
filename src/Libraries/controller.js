/**
 * Created by Admin on 19.04.2016.
 */
var planoPlanApp= angular.module("planoPlanApp",[]);

planoPlanApp.controller("RoomListCtrl", function ($scope) {
    $scope.data=model;

    $scope.click=function () {
        $scope.data.things.push({
            name: $scope.text,
            passed: false

        });

        $scope.text="";

    };
    //$scope.showText=function (passed){
    //    return passed ? "Yes":"No"
    //
    //};
    //
    //$scope.setStyle=function (passed) {
    //    return passed ? "color:green":"color:red"
    //
    //};


});