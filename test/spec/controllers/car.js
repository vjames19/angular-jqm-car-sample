'use strict';

describe('Controller: CarCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJqmMixerApp'));

  var CarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarCtrl = $controller('CarCtrl', {
      $scope: scope
    });
  }));
});
