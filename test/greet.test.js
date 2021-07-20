let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Yolanda correctly', function(){
        assert.equal('Hello, Yolanda', greet('Yolanda'));
    });
    it('should greet Koko correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Koko', greet('Koko'));
    });
});