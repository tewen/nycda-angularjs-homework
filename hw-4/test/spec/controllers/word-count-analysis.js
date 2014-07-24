'use strict';

describe('Controller: WordCountAnalysisCtrl', function () {

  // load the controller's module
  beforeEach(module('hw3App'));

  var WordCountAnalysisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WordCountAnalysisCtrl = $controller('WordCountAnalysisCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
