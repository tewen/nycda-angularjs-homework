'use strict';

describe('Service: newYorkTimes', function () {

  // load the service's module
  beforeEach(module('hw3App'));

  // instantiate service
  var newYorkTimes;
  beforeEach(inject(function (_newYorkTimes_) {
    newYorkTimes = _newYorkTimes_;
  }));

  it('should do something', function () {
    expect(!!newYorkTimes).toBe(true);
  });

});
