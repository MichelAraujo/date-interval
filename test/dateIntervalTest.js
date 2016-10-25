const DateInterval = require('../index');
const assert = require('assert');

describe('#DateInterval', () => {
  it('#Tests the interval of two days', (done) => {
    const dateInterval = new DateInterval('2016-10-23 00:00:00');
    assert.equal(dateInterval.setDays(2), '25/10/2016');
    done();
  });

  it('#Test get current date', (done) => {
    const dateInterval = new DateInterval();
    const date = new Date();
    assert.equal(String(dateInterval.setDays(0)), date.getUTCDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getUTCFullYear());
    done();
  });

  it('#Test the toString method without calling setDays method', (done) => {
    const dateInterval = new DateInterval();
    const date = new Date();
    assert.equal(String(dateInterval), date.getUTCDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getUTCFullYear());
    done();
  });
});
