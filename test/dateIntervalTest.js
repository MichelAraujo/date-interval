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

  /**
   * Tests with format Y-M and M-Y
   */
  it('#Test the format Y-M', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00');
    assert.equal(dateInterval.setDays(3).format('Y-M'), '2016-10');
    done();
  });

  it('#Test the format Y-M with month number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-20 00:00:00');
    assert.equal(dateInterval.setDays(3).format('Y-M'), '2016-09');
    done();
  });

  it('#Test the format y-m', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00');
    assert.equal(dateInterval.setDays(3).format('y-m'), '2016-10');
    done();
  });

  it('#Test the format y-m with month number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-20 00:00:00');
    assert.equal(dateInterval.setDays(3).format('y-m'), '2016-9');
    done();
  });

  it('#Test the format M-Y', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00');
    assert.equal(dateInterval.setDays(3).format('M-Y'), '10-2016');
    done();
  });

  it('#Test the format M-Y with month number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-20 00:00:00');
    assert.equal(dateInterval.setDays(3).format('M-Y'), '09-2016');
    done();
  });

  it('#Test the format m-y', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00');
    assert.equal(dateInterval.setDays(3).format('m-y'), '10-2016');
    done();
  });

  it('#Test the format m-y with month number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-9-20 00:00:00');
    assert.equal(dateInterval.setDays(3).format('m-y'), '9-2016');
    done();
  });

  /**
   * Tests with format Y-M-D and D-M-Y
   */
  it('#Test the format Y-M-D with day number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-05 00:00:00');
    assert.equal(dateInterval.setDays(3).format('Y-M-D'), '2016-09-08');
    done();
  });

  it('#Test the format Y-M-D', (done) => {
    const dateInterval = new DateInterval('2016-09-10 00:00:00');
    assert.equal(dateInterval.setDays(3).format('Y-M-D'), '2016-09-13');
    done();
  });

  it('#Test the format D-M-Y with day number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-05 00:00:00');
    assert.equal(dateInterval.setDays(3).format('D-M-Y'), '08-09-2016');
    done();
  });

  it('#Test the format D-M-Y', (done) => {
    const dateInterval = new DateInterval('2016-09-10 00:00:00');
    assert.equal(dateInterval.setDays(3).format('D-M-Y'), '13-09-2016');
    done();
  });

  it('#Test the format Y-M-D h:m:s', (done) => {
    const dateInterval = new DateInterval('2016-09-05 09:10:00');
    assert.equal(dateInterval.setDays(2).format('Y-M-D h:m:s'), '2016-09-07 12:10:0');
    done();
  });

  it('#Test the format D-M-Y h:m:s', (done) => {
    const dateInterval = new DateInterval('2016-09-05 09:10:00');
    assert.equal(dateInterval.setDays(2).format('D-M-Y h:m:s'), '07-09-2016 12:10:0');
    done();
  });

  /**
   * Tests with format Y/M and M/Y
   */
  it('#Test the format Y/M', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00');
    assert.equal(dateInterval.setDays(3).format('Y/M'), '2016/10');
    done();
  });

  it('#Test the format Y/M with month number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-20 00:00:00');
    assert.equal(dateInterval.setDays(3).format('Y/M'), '2016/09');
    done();
  });

  it('#Test the format y/m', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00');
    assert.equal(dateInterval.setDays(3).format('y/m'), '2016/10');
    done();
  });

  it('#Test the format y/m with month number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-20 00:00:00');
    assert.equal(dateInterval.setDays(3).format('y/m'), '2016/9');
    done();
  });

  it('#Test the format M/Y', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00');
    assert.equal(dateInterval.setDays(3).format('M/Y'), '10/2016');
    done();
  });

  it('#Test the format M/Y with month number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-20 00:00:00');
    assert.equal(dateInterval.setDays(3).format('M/Y'), '09/2016');
    done();
  });

  it('#Test the format m/y', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00');
    assert.equal(dateInterval.setDays(3).format('m/y'), '10/2016');
    done();
  });

  it('#Test the format m/y with month number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-9-20 00:00:00');
    assert.equal(dateInterval.setDays(3).format('m/y'), '9/2016');
    done();
  });

  /**
   * Tests with format Y/M/D and D/M/Y
   */
  it('#Test the format Y/M/D with day number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-05 00:00:00');
    assert.equal(dateInterval.setDays(3).format('Y/M/D'), '2016/09/08');
    done();
  });

  it('#Test the format Y/M/D', (done) => {
    const dateInterval = new DateInterval('2016-09-10 00:00:00');
    assert.equal(dateInterval.setDays(3).format('Y/M/D'), '2016/09/13');
    done();
  });

  it('#Test the format D/M/Y with day number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-05 00:00:00');
    assert.equal(dateInterval.setDays(3).format('D/M/Y'), '08/09/2016');
    done();
  });

  it('#Test the format D/M/Y', (done) => {
    const dateInterval = new DateInterval('2016-09-10 00:00:00');
    assert.equal(dateInterval.setDays(3).format('D/M/Y'), '13/09/2016');
    done();
  });

  it('#Test the format Y/M/D h:m:s', (done) => {
    const dateInterval = new DateInterval('2016-09-05 09:10:00');
    assert.equal(dateInterval.setDays(2).format('Y/M/D h:m:s'), '2016/09/07 12:10:0');
    done();
  });

  it('#Test the format D/M/Y h:m:s', (done) => {
    const dateInterval = new DateInterval('2016-09-05 09:10:00');
    assert.equal(dateInterval.setDays(2).format('D/M/Y h:m:s'), '07/09/2016 12:10:0');
    done();
  });

  it('#Test the format D/M/Y h:m:s with hours number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-05 01:10:00');
    assert.equal(dateInterval.setDays(2).format('D/M/Y h:m:s'), '07/09/2016 04:10:0');
    done();
  });

  it('#Test the format D-M-Y h:m:s with hours number less than ten', (done) => {
    const dateInterval = new DateInterval('2016-09-05 01:10:00');
    assert.equal(dateInterval.setDays(2).format('D-M-Y h:m:s'), '07-09-2016 04:10:0');
    done();
  });

  /**
   * Tests with format Y-M-D and D-M-Y to hours local
   */
  it('#Test the format Y-M-D with day number less than ten to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-05 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('Y-M-D'), '2016-09-08');
    done();
  });

  it('#Test the format Y-M-D to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-10 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('Y-M-D'), '2016-09-13');
    done();
  });

  it('#Test the format D-M-Y with day number less than ten to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-05 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('D-M-Y'), '08-09-2016');
    done();
  });

  it('#Test the format D-M-Y to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-10 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('D-M-Y'), '13-09-2016');
    done();
  });

  it('#Test the format Y-M-D h:m:s to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-05 09:10:00', 'local');
    assert.equal(dateInterval.setDays(2).format('Y-M-D h:m:s'), '2016-09-07 09:10:0');
    done();
  });

  it('#Test the format D-M-Y h:m:s to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-05 09:10:00', 'local');
    assert.equal(dateInterval.setDays(2).format('D-M-Y h:m:s'), '07-09-2016 09:10:0');
    done();
  });

  /**
   * Tests with format Y/M and M/Y to hours local
   */
  it('#Test the format Y/M to hours local', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('Y/M'), '2016/10');
    done();
  });

  it('#Test the format Y/M with month number less than ten to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-20 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('Y/M'), '2016/09');
    done();
  });

  it('#Test the format y/m to hours local', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('y/m'), '2016/10');
    done();
  });

  it('#Test the format y/m with month number less than ten to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-20 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('y/m'), '2016/9');
    done();
  });

  it('#Test the format M/Y to hours local', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('M/Y'), '10/2016');
    done();
  });

  it('#Test the format M/Y with month number less than ten to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-20 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('M/Y'), '09/2016');
    done();
  });

  it('#Test the format m/y to hours local', (done) => {
    const dateInterval = new DateInterval('2016-10-25 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('m/y'), '10/2016');
    done();
  });

  it('#Test the format m/y with month number less than ten to hours local', (done) => {
    const dateInterval = new DateInterval('2016-9-20 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('m/y'), '9/2016');
    done();
  });

  /**
   * Tests with format Y/M/D and D/M/Y to hours local
   */
  it('#Test the format Y/M/D with day number less than ten to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-05 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('Y/M/D'), '2016/09/08');
    done();
  });

  it('#Test the format Y/M/D to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-10 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('Y/M/D'), '2016/09/13');
    done();
  });

  it('#Test the format D/M/Y with day number less than ten to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-05 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('D/M/Y'), '08/09/2016');
    done();
  });

  it('#Test the format D/M/Y to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-10 00:00:00', 'local');
    assert.equal(dateInterval.setDays(3).format('D/M/Y'), '13/09/2016');
    done();
  });

  it('#Test the format Y/M/D h:m:s to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-05 09:10:00', 'local');
    assert.equal(dateInterval.setDays(2).format('Y/M/D h:m:s'), '2016/09/07 09:10:0');
    done();
  });

  it('#Test the format D/M/Y h:m:s to hours local', (done) => {
    const dateInterval = new DateInterval('2016-09-05 09:10:00', 'local');
    assert.equal(dateInterval.setDays(2).format('D/M/Y h:m:s'), '07/09/2016 09:10:0');
    done();
  });
});
