var assert = require('assert');
var guc = require('../index.js');
describe('Error Test of guc', function () {
    it('Error: invalid arguments by nothing arguments', () => {
        assert.throws(() => guc(), Error, "Error: invalid arguments");
    });
    it('Error: invalid arguments by invalid gas', () => {
        assert.throws(() => guc('hey', 'kg', 'L', 1), Error, "Error: invalid arguments");
    });
    it('Error: invalid arguments by invalid inputUnit', () => {
        assert.throws(() => guc('O2', 'hoge', 'L', 1), Error, "Error: invalid arguments");
    });
    it('Error: invalid arguments by invalid outputUnit', () => {
        assert.throws(() => guc('O2', 'kg', 'foo', 1), Error, "Error: invalid arguments");
    });
    it('Error: invalid arguments by invalid inputUnit and invalid outputUnit', () => {
        assert.throws(() => guc('O2', 'hoge', 'foo', 1), Error, "Error: invalid arguments");
    });
    it('Error: invalid arguments by invalid input', () => {
        assert.throws(() => guc('O2', 'kg', 'L', '!'), Error, "Error: invalid arguments");
    });
});
describe('Nominal Test of guc', function () {
});