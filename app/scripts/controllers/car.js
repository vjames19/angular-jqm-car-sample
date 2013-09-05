'use strict';
angular.module('angularJqmMixerApp').controller('CarCtrl', function ($scope, Cars) {
  $scope.cars = Cars.getCars();

  $scope.selectCar = function (car) {
    $scope.selectedCar = car;
  };

  $scope.addCar = function () {
    Cars.addCar($scope.manufacturer, $scope.model, $scope.price, $scope.description, $scope.img);
    $scope.clearAddCarForm();
  };

  $scope.clearAddCarForm = function () {
    $scope.manufacturer = null;
    $scope.model = null;
    $scope.price = null;
    $scope.description = null;
    $scope.img = null;
  }
});
