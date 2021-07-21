var assert = require('assert')
var findItemsOver = require('../findItemsOver')

describe('The findItemsOver function', function () {

    it('should return products that have quantity higher than 20.', function () {
        assert.deepEqual([
            { "name": "pears", "qty": 39 },
            { "name": "bananas", "qty": 29 }]

            , findItemsOver([{ "name": "pears", "qty": 39 },
            { "name": "bananas", "qty": 29 },
            { "name": "apples", "qty": 3 }
            ], 20));
    });

    it('should return products that have quantity higher than 30.', function () {
        assert.deepEqual([
            { "name": "pears", "qty": 37 },]

            , findItemsOver([{ "name": "pears", "qty": 37},
            { "name": "bananas", "qty": 27 },
            { "name": "apples", "qty": 3 }
            ], 30));
    });
});