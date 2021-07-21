var assert = require('assert')
var transportFee = require('../transportFee')

describe('The transportFee function', function(){

    it('should return the price of a morning shift', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should return the price of an afternoon shift', function(){
        assert.equal('R10', transportFee('afternoon'));
    });

    it('should return the price of a nightshift', function(){
        assert.equal('free', transportFee('nightshift'));
    });
});