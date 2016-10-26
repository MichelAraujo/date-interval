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
  constructor(date, utc) {
    if (date === undefined) {
      this.date = new Date();
    } else {
      this.date = new Date(date);
    }

    if (utc === undefined) {
      this.utc = true;
    } else if (utc === 'local') {
      this.utc = false;
    } else {
      this.utc = true;
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
    if (this.utc) {
      const newDay = this.date.getUTCDate() + interval;
      this.date.setUTCDate(newDay);
    } else {
      const newDay = this.date.getDate() + interval;
      this.date.setDate(newDay);
    }
    return this;
  }

  format(format) {
    if (this.utc) {
      return this.getFormatUTC(format);
    } else {

    }
  }

  /**
   * If the object is converted to string returns this standard format
   * @returns {string}
   */
  toString() {
    return this.date.getUTCDate() + '/' + (this.date.getUTCMonth() + 1) + '/' + this.date.getUTCFullYear();
  }

  getFormatUTC(format) {
    switch (format) {
      case 'Y-M': {
        return this.date.getUTCFullYear() + '-' + this.addZeroInMonthUTC();
      }
      case 'y-m': {
        return this.date.getUTCFullYear() + '-' + (this.date.getUTCMonth() + 1);
      }
      case 'M-Y': {
        return this.addZeroInMonthUTC() + '-' + this.date.getUTCFullYear();
      }
      case 'm-y': {
        return (this.date.getUTCMonth() + 1) + '-' + this.date.getUTCFullYear();
      }
      case 'Y-M-D': {
        return this.date.getUTCFullYear() + '-' + this.addZeroInMonthUTC() + '-' + this.addZeroInDayUTC();
      }
      case 'D-M-Y': {
        return this.addZeroInDayUTC() + '-' + this.addZeroInMonthUTC() + '-' + this.date.getUTCFullYear();
      }
      case 'Y-M-D h:m:s': {
        return this.date.getUTCFullYear() + '-' + this.addZeroInMonthUTC() + '-' + this.addZeroInDayUTC()
          + ' ' + this.date.getUTCHours() + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      case 'D-M-Y h:m:s': {
        return this.addZeroInDayUTC() + '-' + this.addZeroInMonthUTC() + '-' + this.date.getUTCFullYear()
          + ' ' + this.date.getUTCHours() + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      case 'Y/M': {
        return this.date.getUTCFullYear() + '/' + this.addZeroInMonthUTC();
      }
      case 'y/m': {
        return this.date.getUTCFullYear() + '/' + (this.date.getUTCMonth() + 1);
      }
      case 'M/Y': {
        return this.addZeroInMonthUTC() + '/' + this.date.getUTCFullYear();
      }
      case 'm/y': {
        return (this.date.getUTCMonth() + 1) + '/' + this.date.getUTCFullYear();
      }
      case 'Y/M/D': {
        return this.date.getUTCFullYear() + '/' + this.addZeroInMonthUTC() + '/' + this.addZeroInDayUTC();
      }
      case 'D/M/Y': {
        return this.addZeroInDayUTC() + '/' + this.addZeroInMonthUTC() + '/' + this.date.getUTCFullYear();
      }
      case 'Y/M/D h:m:s': {
        return this.date.getUTCFullYear() + '/' + this.addZeroInMonthUTC() + '/' + this.addZeroInDayUTC()
          + ' ' + this.date.getUTCHours() + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      case 'D/M/Y h:m:s': {
        return this.addZeroInDayUTC() + '/' + this.addZeroInMonthUTC() + '/' + this.date.getUTCFullYear()
          + ' ' + this.date.getUTCHours() + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      default:
        throw new Error('Format of the date invalid');
    }
  }

  getFormatLocal(format) {
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
      case 'Y-M-D h:m:s': {
        return this.date.getUTCFullYear() + '-' + this.addZeroInMonth() + '-' + this.addZeroInDay()
          + ' ' + this.date.getUTCHours() + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      case 'D-M-Y h:m:s': {
        return this.addZeroInDay() + '-' + this.addZeroInMonth() + '-' + this.date.getUTCFullYear()
          + ' ' + this.date.getUTCHours() + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      case 'Y/M': {
        return this.date.getUTCFullYear() + '/' + this.addZeroInMonth();
      }
      case 'y/m': {
        return this.date.getUTCFullYear() + '/' + (this.date.getUTCMonth() + 1);
      }
      case 'M/Y': {
        return this.addZeroInMonth() + '/' + this.date.getUTCFullYear();
      }
      case 'm/y': {
        return (this.date.getUTCMonth() + 1) + '/' + this.date.getUTCFullYear();
      }
      case 'Y/M/D': {
        return this.date.getUTCFullYear() + '/' + this.addZeroInMonth() + '/' + this.addZeroInDay();
      }
      case 'D/M/Y': {
        return this.addZeroInDay() + '/' + this.addZeroInMonth() + '/' + this.date.getUTCFullYear();
      }
      case 'Y/M/D h:m:s': {
        return this.date.getUTCFullYear() + '/' + this.addZeroInMonth() + '/' + this.addZeroInDay()
          + ' ' + this.date.getUTCHours() + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      case 'D/M/Y h:m:s': {
        return this.addZeroInDay() + '/' + this.addZeroInMonth() + '/' + this.date.getUTCFullYear()
          + ' ' + this.date.getUTCHours() + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      default:
        throw new Error('Format of the date invalid');
    }
  }

  addZeroInMonthUTC() {
    let month = this.date.getUTCMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    return month;
  }

  addZeroInDayUTC() {
    let day = this.date.getUTCDate();
    if (day < 10) {
      day = '0' + day;
    }
    return day;
  }
}

module.exports = DateInterval;
