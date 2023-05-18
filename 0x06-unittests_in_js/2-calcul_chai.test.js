const assert = require('assert');
const expect = require('chai').expect;
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('test #1', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('test #2', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('test #3', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('test #4', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
  it('test #5', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
  it('test #6', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});