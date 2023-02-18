var app = angular.module("myApp", []);
app.controller("AppController", function ($scope, $http) {
  $scope.getData = function () {
    $http({
      method: "GET",
      url: "https://63edbc0c388920150dd1f524.mockapi.io/PH22339/wineshop",
    }).then(function getData(response) {
      $scope.wines = response.data;
    });
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
      quantity: $scope.quantityWine,
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
      }
    );

    alert("success");
  };
});
