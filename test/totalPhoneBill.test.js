var assert = require('assert')
var totalPhoneBill = require('../totalPhoneBill')

describe('The totalPhoneBill function', function(){

    it('should return the price of a call', function(){
        assert.equal('R2.75', totalPhoneBill('call'));
    });
    it('should return the price of a sms', function(){
        assert.equal('R0.65', totalPhoneBill('sms'));
    });

    it('should return the price of 2 calls and 3 sms', function(){
        assert.equal('R7.45', totalPhoneBill('call, call, sms, sms, sms'));
    });
    it('should return the price of a sms and 4 calls', function(){
        assert.equal('R11.65', totalPhoneBill('sms, call, call, call, call'));
    });
});