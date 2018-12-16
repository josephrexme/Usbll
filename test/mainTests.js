var helpers = require('../src/js/helpers');
console.log(helpers.getDevice);

var expect = require('chai').expect;

describe('Helper Functions Test', () => {
  it('detects mobile width', function () {
    expect(helpers.getDevice(320)).to.equal('Mobile');
  });

  it('detects tablet width', function () {
    expect(helpers.getDevice(800)).to.equal('Tablet');
  });

  it('detects desktop width', function () {
    expect(helpers.getDevice(1320)).to.equal('Desktop');
  });
});
