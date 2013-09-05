'use strict';

describe('Directive: addCar', function () {
  beforeEach(module('angularJqmMixerApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<add-car></add-car>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the addCar directive');
  }));
});
