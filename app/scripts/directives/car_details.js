'use strict';

angular.module('angularJqmMixerApp')
  .directive('carDetails', function () {
    return {
      templateUrl: 'views/car_details.html',
      restrict: 'E',
      replace: true,
      scope: {
        car: '='
      }
    };
  });
