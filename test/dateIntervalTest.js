const DateInterval = require('../index');
const assert = require('assert');

describe('#DateInterval', function() {

    it('#Tests the interval of two days', function(done) {
    	const dateInterval = new DateInterval('2016-10-23 00:00:00');
        assert.equal(dateInterval.setDays(2), '25/10/2016');
        done();
    });

    it('#Test get current date', function (done) {
        const dateInterval = new DateInterval();
        const date = new Date();
        assert.equal(dateInterval.setDays(0), date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());
        done();
    });

    it('#Test the toString method without calling setDays method', function (done) {
        const dateInterval = new DateInterval();
        const date = new Date();
        assert.equal(dateInterval, date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());
        done();
    });

});