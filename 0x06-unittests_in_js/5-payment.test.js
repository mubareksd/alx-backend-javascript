const assert = require('assert');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  var spy;
  beforeEach("setup", () => {
    spy = sinon.spy(console, 'log');
  });
  afterEach("teardown", () => {
    spy.restore()
  });
  it('test #1', () => {
    sendPaymentRequestToApi(100, 20);
    assert.strictEqual(spy.calledOnceWithExactly('The total is: 120'), true);
  });

  it('test #2', () => {
    sendPaymentRequestToApi(10, 10);
    assert.strictEqual(spy.calledOnceWithExactly('The total is: 20'), true);
  });
});
