const { expect } = require('chai');
const request = require('request');

describe('api', () => {
  describe('index', () => {
    const options = {
      url: 'http://localhost:7865',
      method: 'GET',
    };

    it('test correct status code', (done) => {
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

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
        expect(res.headers['content-type']).to.equal(
          'text/html; charset=utf-8'
        );
        done();
      });
    });
  });

  describe('cart', () => {
    const options = {
      url: 'http://localhost:7865/cart/12',
      method: 'GET',
    };

    const woptions = {
      url: 'http://localhost:7865/cart/hello',
      method: 'GET',
    };

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
  });
});
