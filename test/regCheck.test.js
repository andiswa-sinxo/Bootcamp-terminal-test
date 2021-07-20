var assert = require("assert")
var regCheck = require("../regCheck")

describe('The regCheck function', function(){

    it('should return true if the regNo and location is from Gauteng', function(){
        assert.equal(true, regCheck('AS 1234 GP', 'GP'));
    });
    it('should return false if the regNo and location is not from Gauteng', function(){
        assert.equal(false , regCheck('AI 123-789 GP', 'EC'));
    });

    it('should return true if the regNo and location is from Mpumalanga', function(){
        assert.equal(true, regCheck('ES 649 MP', 'MP'));
    });
    it('should return false if the regNo and location is not from Mpumalanga', function(){
        assert.equal(false , regCheck('TK 789 MP', 'GP'));
    });

});