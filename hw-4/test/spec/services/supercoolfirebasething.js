'use strict';

describe('Service: superCoolFirebaseThing', function () {

  // load the service's module
  beforeEach(module('hw3App'));

  // instantiate service
  var superCoolFirebaseThing;
  beforeEach(inject(function (_superCoolFirebaseThing_) {
    superCoolFirebaseThing = _superCoolFirebaseThing_;
  }));

  it('should do something', function () {
    expect(!!superCoolFirebaseThing).toBe(true);
  });

});
