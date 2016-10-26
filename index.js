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

  format(format) {
    switch (format) {
      case 'Y-M': {
        return this.date.getUTCFullYear() + '-' + this.addZeroInMonth();
      }
      case 'y-m': {
        return this.date.getUTCFullYear() + '-' + (this.date.getUTCMonth() + 1);
      }
      case 'M-Y': {
        return this.addZeroInMonth() + '-' + this.date.getUTCFullYear();
      }
      case 'm-y': {
        return (this.date.getUTCMonth() + 1) + '-' + this.date.getUTCFullYear();
      }
      case 'Y-M-D': {
        return this.date.getUTCFullYear() + '-' + this.addZeroInMonth() + '-' + this.addZeroInDay();
      }
      case 'D-M-Y': {
        return this.addZeroInDay() + '-' + this.addZeroInMonth() + '-' + this.date.getUTCFullYear();
      }
      default:
        throw new Error('Format of the date invalid');
    }
  }

  /**
   * If the object is converted to string returns this standard format
   * @returns {string}
   */
  toString() {
    return this.date.getUTCDate() + '/' + (this.date.getUTCMonth() + 1) + '/' + this.date.getUTCFullYear();
  }

  addZeroInMonth() {
    let month = this.date.getUTCMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    return month;
  }

  addZeroInDay() {
    let day = this.date.getUTCDate();
    if (day < 10) {
      day = '0' + day;
    }
    return day;
  }
}

module.exports = DateInterval;
