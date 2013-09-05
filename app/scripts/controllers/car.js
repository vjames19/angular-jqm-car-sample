'use strict';
angular.module('angularJqmMixerApp').controller('CarCtrl', function ($scope, Cars) {
  $scope.cars = Cars.getCars();

  $scope.selectCar = function (car) {
    $scope.cars = Cars.getCars();
    $scope.selectedCar = car;
  };
});
