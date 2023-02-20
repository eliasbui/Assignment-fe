var app = angular.module("assignment", []);
app.controller("assignmentController", function ($scope, $http) {
  $scope.indexPage = "";
  $scope.pageSize = "";
  ($scope.curPage = 1), ($scope.itemsPerPage = 14), ($scope.maxSize = 5);
  $scope.getData = function () {
    $http({
      method: "GET",
      url: "https://63edbc0c388920150dd1f524.mockapi.io/PH22339/wineshop",
    }).then(function getData(response) {
      $scope.wines = response.data;
      $scope.itemsDetails = response.data;
      $scope.numOfPages = function () {
        return Math.ceil($scope.wines.length / $scope.itemsPerPage);
      };
      $scope.$watch("curPage + numPerPage", function () {
        var begin = ($scope.curPage - 1) * $scope.itemsPerPage,
          end = begin + $scope.itemsPerPage;
        $scope.filteredItems = $scope.wines.slice(begin, end);
      });
    });
  };
  $scope.totalPage = function () {
    return $scope.wines.length / $scope.itemsPerPage;
  };
  $scope.pageRange = function () {
    var pageS = $scope.totalPage();
    $scope.page = pageS;
    var pageRange = [];
    for (var i = 0; i < pageS; i++) {
      pageRange.push(i + 1);
    }
    $scope.pageSize = pageRange[pageRange.length - 1];
    return pageRange;
  };
  $scope.changRangePage = function (page) {
    $scope.curPage = page;
  };
  $scope.Previous = function () {
    $scope.curPage = $scope.curPage - 1;
    if ($scope.curPage <= 0) {
      $scope.curPage = 1;
    }
  };
  $scope.Next = function () {
    $scope.curPage = $scope.curPage + 1;
    if ($scope.curPage > $scope.totalPage() + 1) {
      $scope.curPage = $scope.totalPage() + 1;
    }
  };
  $scope.getData();
  $scope.detailWine = function (wine) {
    $scope.selectWine = wine;
    $scope.showDetail = true;
    6405;
  };
});
