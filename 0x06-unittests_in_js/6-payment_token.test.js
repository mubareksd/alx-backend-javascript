const assert = require('assert');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test #1', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.strictEqual(response.data, 'Successful response from the API');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
