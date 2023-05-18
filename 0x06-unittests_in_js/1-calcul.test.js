const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('test #1', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('test #2', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('test #3', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('test #4', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('test #5', function () {
    assert.equal(calculateNumber('SUM', 3.5, 3.2), 7);
  });
  it('test #6', function () {
    assert.equal(calculateNumber('SUM', 3.5, 3.2), 7);
  });
});