var assert = require("assert")
var isFromBellville = require('../isFromBellville')

describe('The isFromBellville function', function(){

    it('should return true if the reg number is from Bellville', function(){
        assert.equal(true, isFromBellville('CY 123456'));
    });
    it('should return false if the reg number is not from Bellville ', function(){
        assert.equal(false , isFromBellville('CA 123-789'));
    });

    it('should return true if the reg number is from Bellville', function(){
        assert.equal(true, isFromBellville('CY 675-802'));
    });
    it('should return false if the reg number is not from Bellville ', function(){
        assert.equal(false , isFromBellville('CL 675-126'));
    });
});