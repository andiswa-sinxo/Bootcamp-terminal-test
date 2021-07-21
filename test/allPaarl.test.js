var assert = require('assert')
var allPaarl = require('../allPaarl')

describe('The allPaarl function', function(){

    it('should return the number of 3 registration numbers from Paarl ', function(){
        assert.deepEqual(['CJ 345 123', 'CJ 2345', 'CJ 123'], allPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('should return the number of 2 registration numbers from Paarl', function(){
        assert.deepEqual(['CJ 345 123', 'CJ 123'], allPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});