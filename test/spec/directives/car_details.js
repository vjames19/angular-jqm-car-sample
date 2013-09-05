'use strict';

describe('Directive: carDetails', function () {
  beforeEach(module('angularJqmMixerApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<car-details></car-details>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the carDetails directive');
  }));
});
