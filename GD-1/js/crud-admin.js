var app = angular.module("myApp", []);
app.controller("AppController", function ($scope, $http) {
  ($scope.curPage = 1), ($scope.itemsPerPage = 10), ($scope.maxSize = 5);
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
    var pageRange = [];
    for (var i = 0; i < pageS; i++) {
      pageRange.push(i + 1);
    }
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
  $scope.detailProduct = function (wine) {
    $scope.selectWine = wine;
    $scope.showDetail = true;
  };
  $scope.deleteProduct = function (id) {
    $http({
      method: "DELETE",
      url: "https://63edbc0c388920150dd1f524.mockapi.io/PH22339/wineshop/" + id,
    });
    alert("Successfully deleted,\nPlease refresh your web browser");
  };
  $scope.idWine = "";
  $scope.nameWine = "";
  $scope.priceWine = "";
  $scope.quantityWine = "";
  $scope.imageWine = "";
  $scope.categoriesWine = "";
  $scope.countryWine = "";
  $scope.year_of_productionWine = "";
  $scope.manufacturersWine = "";
  $scope.sizeWine = "";
  $scope.titleWine = "";
  $scope.reviewsWine = "";
  $scope.addProduct = function () {
    $http.post("https://63edbc0c388920150dd1f524.mockapi.io/PH22339/wineshop", {
      name: $scope.nameWine,
      price: $scope.priceWine,
      quantity: $scope.quantityWine,
      image: $scope.imageWine,
      categories: $scope.categoriesWine,
      country: $scope.countryWine,
      year_of_production: $scope.year_of_productionWine,
      manufacturers: $scope.manufacturersWine,
      size: $scope.sizeWine,
      title: $scope.titleWine,
      reviews: $scope.reviewsWine,
    });
    alert("Success!");
  };
  $scope.updateProduct = function () {
    $http.put(
      "https://63edbc0c388920150dd1f524.mockapi.io/PH22339/wineshop/" +
        $scope.selectWine.id,
      {
        name: $scope.selectWine.name,
        price: $scope.selectWine.price,
        quantity: $scope.selectWine.quantity,
        image: $scope.selectWine.image,
        categories: $scope.selectWine.categories,
        country: $scope.selectWine.country,
        year_of_production: $scope.selectWine.year_of_production,
        manufacturers: $scope.selectWine.manufacturers,
        size: $scope.selectWine.size,
        title: $scope.selectWine.title,
        reviews: $scope.selectWine.reviews,
      }
    );
    alert("success");
  };
  $scope.updateProductByID = function (id) {
    $http.put(
      "https://63edbc0c388920150dd1f524.mockapi.io/PH22339/wineshop/" + id,
      {
        name: $scope.nameWine,
        price: $scope.priceWine,
        quantity: $scope.quantityWine,
        image: $scope.imageWine,
        categories: $scope.categoriesWine,
        country: $scope.countryWine,
        year_of_production: $scope.year_of_productionWine,
        manufacturers: $scope.manufacturersWine,
        size: $scope.sizeWine,
        title: $scope.titleWine,
        reviews: $scope.reviewsWine,
      }
    );
    alert("success");
  };
  $scope.showDetailsClicked = function (wine) {
    $scope.idWine = wine.id;
    $scope.nameWine = wine.name;
    $scope.priceWine = wine.price;
    $scope.quantityWine = wine.quantity;
    $scope.imageWine = wine.image;
    $scope.categoriesWine = wine.categories;
    $scope.countryWine = wine.country;
    $scope.year_of_productionWine = wine.year_of_production;
    $scope.manufacturersWine = wine.manufacturers;
    $scope.sizeWine = wine.size;
    $scope.titleWine = wine.title;
    $scope.reviewsWine = wine.reviews;
  };
});
