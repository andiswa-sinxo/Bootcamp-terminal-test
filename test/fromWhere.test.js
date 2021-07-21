var assert = require('assert')
var fromWhere = require('../fromWhere')

describe('The fromWhere function', function(){

    it('should return the town the car is from', function(){
        assert.equal('Cape Town', fromWhere('CA 123456'));
    });
    it('should return the town the car is from ', function(){
        assert.equal('Bellville' , fromWhere('CY 123-789'));
    });

    it('should return the town the car is from', function(){
        assert.equal('Paarl', fromWhere('CJ 675-802'));
    });

    it('should return the town the car is from', function(){
        assert.equal('Some other place!', fromWhere('CC 675-802'));
    });
    
});