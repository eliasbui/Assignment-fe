var app = angular.module("assignment", []);
app.controller("assignmentController", function ($scope, $http) {
  $scope.items;
  $scope.getDataItem = function () {
    $http({
      method: "GET",
      url: "https://63edbc0c388920150dd1f524.mockapi.io/PH22339/Wine",
    }).then(function (response) {
      $scope.items = response.data;
    });
  };
  $scope.deleteProduct = function (id) {
    $http({
      method: "DELETE",
      url: "https://63edbc0c388920150dd1f524.mockapi.io/PH22339/Wine/" + id,
    }).then(function (response) {
      alert("Xoa san pham thanh cong");
    });
  };
  $scope.getDataItem();
});
