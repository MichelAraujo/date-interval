/**
 * DateInterval
 * Simple class to create interval between dates
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
	        this._date = new Date();
		} else {
            this._date = new Date(date);
        }
  	}

    /**
     * Return the date concerning the interval
     *
     * @param {int} interval Interval Number of days
     * @author Michel Araujo <araujo_michel@yahoo.com.br>
     * @returns {string}
     */
	setDays(interval) {
		const newDay = this._date.getDate() + interval;
		this._date.setDate(newDay);

		return this._date.getDate()+'/'+(this._date.getMonth()+1)+'/'+this._date.getFullYear();
	}
}

module.exports = DateInterval;