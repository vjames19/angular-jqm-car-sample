'use strict';

angular.module('angularJqmMixerApp')
  .directive('addCar', function () {
    return {
      templateUrl: 'views/add_car.html',
      restrict: 'E',
      replace: true,
      scope: {},
      controller: function($scope, Cars) {
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
      }
    };
  });
