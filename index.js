/**
 * DateInterval
 * Simple class to create interval between dates
 * By default all returns in UTC
 *
 * @author Michel Araujo <araujo_michel@yahoo.com.br>
 * @version 1.0.0
 */
class DateInterval {

  /**
   * @constructor
   * @param {String} date start date range
   * @author Michel Araujo <araujo_michel@yahoo.com.br>
   */
  constructor(date) {
    if (date === undefined) {
      this.date = new Date();
    } else {
      this.date = new Date(date);
    }
  }

  /**
   * Return the date concerning the interval
   *
   * @param {int} interval Interval Number of days
   * @author Michel Araujo <araujo_michel@yahoo.com.br>
   * @returns {Object}
   */
  setDays(interval) {
    const newDay = this.date.getUTCDate() + interval;
    this.date.setUTCDate(newDay);
    return this;
  }

  /**
   * If the object is converted to string returns this standard format
   * @returns {string}
   */
  toString() {
    return this.date.getUTCDate() + '/' + (this.date.getUTCMonth() + 1) + '/' + this.date.getUTCFullYear();
  }
}

module.exports = DateInterval;
