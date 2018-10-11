var assert = require('assert');
var guc = require('../index.js');
describe('Test of guc', function () {
    it('invalid arguments', function () {
        assert.throws(() => guc(), Error, "Error: invalid arguments");
    });
});