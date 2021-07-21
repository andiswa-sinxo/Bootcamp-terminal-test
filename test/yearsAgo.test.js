var assert = require('assert')
var yearsAgo = require('../yearsAgo')


describe('The yearsAgo function', function(){

    it('should return how many year ago from current year', function(){
        assert.equal(9, yearsAgo(2012));
    });
    it('should return how many year ago from current year', function(){
        assert.equal(22 , yearsAgo(1999));
    });

    it('should return how many year ago from current year', function(){
        assert.equal(36, yearsAgo(1985));
    });
    it('should return how many year ago from current year', function(){
        assert.equal(26 , yearsAgo(1995));
    });

});