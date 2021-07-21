var assert = require('assert')
var findItemsOver20 = require ('../findItemsOver20')

describe('The findItemsOver function', function () {

    it('should return products that have quantity higher than 20.', function () {
        assert.deepEqual([
            { "name": "pears", "qty": 37 },
            { "name": "bananas", "qty": 27 }]

            , findItemsOver20([{ "name": "pears", "qty": 37 },
            {"name":"bananas","qty":27},
            { "name": "apples", "qty": 3 }
            ], ));
    });

    it('should return products that have quantity higher than 20.', function () {
        assert.deepEqual([
            { "name": "pears", "qty": 37},
            { "name": "bananas", "qty":29}]

            , findItemsOver20([{ "name": "pears", "qty": 37},
            {"name":"bananas","qty":29},
            { "name": "apples", "qty": 3 }
            ], 30));
    });
});