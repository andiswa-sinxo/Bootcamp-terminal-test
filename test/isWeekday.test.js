var assert = require('assert')
var isWeekday = require('../isWeekday')

describe('The isWeekday function', function(){

    it('should return true if the day is a weekday', function(){
        assert.equal(true , isWeekday('Monday'));
    });
    it('should false if the day is not a weekday', function(){
        assert.equal(false, isWeekday('Sunday'));
    });

    it('should return true if the day is a weekday', function(){
        assert.equal(true , isWeekday('Tuesday'));
    });
    it('should false if the day is not a weekday', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
});