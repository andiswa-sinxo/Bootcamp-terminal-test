var assert = require('assert')
var countAllFromTown =require('../countAllFromTown')

describe('The countAllFromTown function', function(){

    it('should return the number of 3 registration numbers that is from that town ', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL'));
    });
    it('should return the number of a registration number that is from that town ', function(){
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
    });
});