const { expect } = require('chai');
const request = require('request');

describe('api', () => {
  const options = {
    url: 'http://localhost:7865/cart/12',
    method: 'GET'
  }

  const woptions = {
    url: 'http://localhost:7865/cart/hello',
    method: 'GET'
  }

  it('test correct status code', (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test wrong status code', (done) => {
    request(woptions, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('test correct response body', (done) => {
    request(options, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
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
