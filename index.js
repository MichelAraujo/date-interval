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
   * @param {String} utc
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

  /**
   * Formats the date as the parameter
   *
   * @param {string} format Format the date Y-M, D/M/Y
   * @author Michel Araujo <araujo_michel@yahoo.com.br>
   * @returns {*}
   */
  format(format) {
    if (!this.utc) {
      return this.getFormatLocal(format);
    }
    return this.getFormatUTC(format);
  }

  /**
   * If the object is converted to string returns this standard format
   * @returns {string}
   */
  toString() {
    return this.date.getUTCDate() + '/' + (this.date.getUTCMonth() + 1) + '/' + this.date.getUTCFullYear();
  }

  /**
   * Check what is the desired format and returns for hours UTC
   *
   * @param {string} format Format the date Y-M, D/M/Y
   * @author Michel Araujo <araujo_michel@yahoo.com.br>
   * @returns {string}
   */
  getFormatUTC(format) {
    const separator = DateInterval.getSeparator(format);

    switch (format) {
      case 'Y' + separator + 'M': {
        return this.date.getUTCFullYear() + separator + this.addZeroInMonthUTC();
      }
      case 'y' + separator + 'm': {
        return this.date.getUTCFullYear() + separator + (this.date.getUTCMonth() + 1);
      }
      case 'M' + separator + 'Y': {
        return this.addZeroInMonthUTC() + separator + this.date.getUTCFullYear();
      }
      case 'm' + separator + 'y': {
        return (this.date.getUTCMonth() + 1) + separator + this.date.getUTCFullYear();
      }
      case 'Y' + separator + 'M' + separator + 'D': {
        return this.date.getUTCFullYear() + separator + this.addZeroInMonthUTC()
          + separator + this.addZeroInDayUTC();
      }
      case 'D' + separator + 'M' + separator + 'Y': {
        return this.addZeroInDayUTC() + separator + this.addZeroInMonthUTC()
          + separator + this.date.getUTCFullYear();
      }
      case 'Y' + separator + 'M' + separator + 'D h:m:s': {
        return this.date.getUTCFullYear() + separator + this.addZeroInMonthUTC()
          + separator + this.addZeroInDayUTC() + ' ' + this.addZeroInHoursUTC()
          + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      case 'D' + separator + 'M' + separator + 'Y h:m:s': {
        return this.addZeroInDayUTC() + separator + this.addZeroInMonthUTC()
          + separator + this.date.getUTCFullYear() + ' ' + this.addZeroInHoursUTC()
          + ':' + this.date.getUTCMinutes() + ':' + this.date.getUTCSeconds();
      }
      default:
        throw new Error('Format of the date invalid');
    }
  }

  /**
   * Check what is the desired format and returns for hours LOCAL
   *
   * @param {string} format Format the date Y-M, D/M/Y
   * @author Michel Araujo <araujo_michel@yahoo.com.br>
   * @returns {string}
   */
  getFormatLocal(format) {
    const separator = DateInterval.getSeparator(format);

    switch (format) {
      case 'Y' + separator + 'M': {
        return this.date.getFullYear() + separator + this.addZeroInMonth();
      }
      case 'y' + separator + 'm': {
        return this.date.getFullYear() + separator + (this.date.getMonth() + 1);
      }
      case 'M' + separator + 'Y': {
        return this.addZeroInMonth() + separator + this.date.getFullYear();
      }
      case 'm' + separator + 'y': {
        return (this.date.getMonth() + 1) + separator + this.date.getFullYear();
      }
      case 'Y' + separator + 'M' + separator + 'D': {
        return this.date.getFullYear() + separator
          + this.addZeroInMonth() + separator + this.addZeroInDay();
      }
      case 'D' + separator + 'M' + separator + 'Y': {
        return this.addZeroInDay() + separator + this.addZeroInMonth()
          + separator + this.date.getFullYear();
      }
      case 'Y' + separator + 'M' + separator + 'D h:m:s': {
        return this.date.getFullYear() + separator + this.addZeroInMonth()
          + separator + this.addZeroInDay() + ' ' + this.addZeroInHours()
          + ':' + this.date.getMinutes() + ':' + this.date.getSeconds();
      }
      case 'D' + separator + 'M' + separator + 'Y h:m:s': {
        return this.addZeroInDay() + separator + this.addZeroInMonth()
          + separator + this.date.getFullYear() + ' ' + this.addZeroInHours() + ':'
          + this.date.getMinutes() + ':' + this.date.getSeconds();
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

  addZeroInMonth() {
    let month = this.date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    return month;
  }

  addZeroInDay() {
    let day = this.date.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    return day;
  }

  addZeroInHours() {
    let hours = this.date.getHours();
    if (hours < 10) {
      hours = '0' + hours;
    }
    return hours;
  }

  addZeroInHoursUTC() {
    let hours = this.date.getUTCHours();
    if (hours < 10) {
      hours = '0' + hours;
    }
    return hours;
  }

  static getSeparator(format) {
    if (format.indexOf('-') !== -1) {
      return '-';
    } else if (format.indexOf('/')) {
      return '/';
    }
    throw new Error('Separator is invalid');
  }
}

module.exports = DateInterval;
