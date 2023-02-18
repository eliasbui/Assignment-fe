var app = angular.module("assignment", []);
app.controller("assignmentController", function ($scope, $http) {
  const pageSize = 10;
  $scope.getData = function () {
    $http({
      method: "GET",
      url: "https://63edbc0c388920150dd1f524.mockapi.io/PH22339/wineshop",
    }).then(function getData(response) {
      $scope.wines = response.data;
    });
  };
  $scope.getData();
  $scope.detailWine = function (wine) {
    $scope.selectWine = wine;
    $scope.showDetail = true;
  };
});
