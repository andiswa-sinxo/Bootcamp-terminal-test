var assert = require("assert")
var countRegNumber = require("../countRegNumber")

describe('The countRegNumber function', function(){

    it('should return the number of 3 registration numbers ', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('should return the number of 5 registration numbers ', function(){
        assert.equal(5, countRegNumber('AI 123-789 GP, KL 123 EC, CY 347-789, CA 46579, KH 987 MP'));
    });
});