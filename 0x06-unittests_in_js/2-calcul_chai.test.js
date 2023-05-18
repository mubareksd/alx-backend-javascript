const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

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