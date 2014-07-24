'use strict';

describe('Controller: TestfbCtrl', function () {

  // load the controller's module
  beforeEach(module('hw3App'));

  var TestfbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestfbCtrl = $controller('TestfbCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
