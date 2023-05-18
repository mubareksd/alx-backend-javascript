const { expect } = require('chai');
const request = require('request');

describe('api', () => {
  const options = {
    url: 'http://localhost:7865',
    method: 'GET'
  }
  it('test correct status code', (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test correct response body', (done) => {
    request(options, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('test correct content type', (done) => {
    request(options, (err, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });
});
