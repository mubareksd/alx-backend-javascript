const assert = require('assert');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('test #1', () => {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    assert.strictEqual(stub.calledOnceWithExactly('SUM', 100, 20), true);
    assert.strictEqual(spy.calledOnceWithExactly('The total is: 10'), true);

    spy.restore();
    stub.restore();
  });
});
