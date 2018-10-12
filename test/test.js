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
    describe('Test of Same Unit', function () {
        it('kg to kg', () => {
            assert.equal(guc('O2', 'kg', 'kg', 1), 1);
            assert.equal(guc('N2', 'kg', 'kg', 1.5), 1.5);
            assert.equal(guc('Ar', 'kg', 'kg', 1.234), 1.234);
        });
        it('Sm3 to Sm3', () => {
            assert.equal(guc('H2', 'Sm3', 'Sm3', 1), 1);
            assert.equal(guc('CO2', 'Sm3', 'Sm3', 1.5), 1.5);
            assert.equal(guc('He', 'Sm3', 'Sm3', 1.234), 1.234);
            assert.equal(guc('C2H2', 'Sm3', 'Sm3', 1.234), 1.234);
        });
    });
    describe('Test of O2', function () {
        it('kg to L', () => { // 1
            assert.equal(guc('O2', 'kg', 'L', 1), 0.876);
            assert.equal(guc('O2', 'kg', 'L', 1.5), 1.314);
            assert.equal(guc('O2', 'kg', 'L', 1.234), 1.080984);
        });
        it('L to Sm3', () => { // 6
            assert.equal(guc('O2', 'L', 'Sm3', 1), 0.901);
            assert.equal(guc('O2', 'L', 'Sm3', 1.5), 1.3515);
            assert.equal(guc('O2', 'L', 'Sm3', 1.234), 1.111834);
        });
    });
    describe('Test of N2', function () {
        it('kg to Nm3', () => { // 2
            assert.equal(guc('N2', 'kg', 'Nm3', 1), 0.800);
            assert.equal(guc('N2', 'kg', 'Nm3', 1.5), 1.2);
            assert.equal(guc('N2', 'kg', 'Nm3', 1.234), 0.9872);
        });
        it('Nm3 to kg', () => { // 7
            assert.equal(guc('N2', 'Nm3', 'kg', 1), 1.251);
            assert.equal(guc('N2', 'Nm3', 'kg', 1.5), 1.8765);
            assert.equal(guc('N2', 'Nm3', 'kg', 1.234), 1.543734);
        });
    });
    describe('Test of Ar', function () {
        it('kg to Sm3', () => { // 3
            assert.equal(guc('Ar', 'kg', 'Sm3', 1), 0.633);
            assert.equal(guc('Ar', 'kg', 'Sm3', 1.5), 0.9495);
            assert.equal(guc('Ar', 'kg', 'Sm3', 1.234), 0.781122);
        });
        it('Nm3 to L', () => { // 8
            assert.equal(guc('Ar', 'Nm3', 'L', 1), 1.275);
            assert.equal(guc('Ar', 'Nm3', 'L', 1.5), 1.9125);
            assert.equal(guc('Ar', 'Nm3', 'L', 1.234), 1.57335);
        });
    });
    describe('Test of H2', function () {
        it('L to kg', () => { // 4
            assert.equal(guc('H2', 'L', 'kg', 1), 0.071);
            assert.equal(guc('H2', 'L', 'kg', 1.5), 0.1065);
            assert.equal(guc('H2', 'L', 'kg', 1.234), 0.087614);
        });
        it('Nm3 to Sm3', () => { // 9
            assert.equal(guc('H2', 'Nm3', 'Sm3', 1), 1.128);
            assert.equal(guc('H2', 'Nm3', 'Sm3', 1.5), 1.692);
            assert.equal(guc('H2', 'Nm3', 'Sm3', 1.234), 1.391952);
        });
    });
    describe('Test of CO2', function () {
        it('L to Nm3', () => { // 5
            assert.equal(guc('CO2', 'L', 'Nm3', 1), 0.506);
            assert.equal(guc('CO2', 'L', 'Nm3', 1.5), 0.759);
            assert.equal(guc('CO2', 'L', 'Nm3', 1.234), 0.624404);
        });
        it('Sm3 to kg', () => { // 10
            assert.equal(guc('CO2', 'Sm3', 'kg', 1), 1.752);
            assert.equal(guc('CO2', 'Sm3', 'kg', 1.5), 2.628);
            assert.equal(guc('CO2', 'Sm3', 'kg', 1.234), 2.161968);
        });
    });
    describe('Test of He', function () {
        it('L to Sm3', () => { // 6
            assert.equal(guc('He', 'L', 'Sm3', 1), 0.789);
            assert.equal(guc('He', 'L', 'Sm3', 1.5), 1.1835);
            assert.equal(guc('He', 'L', 'Sm3', 1.234), 0.973626);
        });
        it('Sm3 to L', () => { // 11
            assert.equal(guc('He', 'Sm3', 'L', 1), 1.268);
            assert.equal(guc('He', 'Sm3', 'L', 1.5), 1.902);
            assert.equal(guc('He', 'Sm3', 'L', 1.234), 1.564712);
        });
    });
    describe('Test of C2H2', function () {
        it('Nm3 to kg', () => { // 7
            assert.equal(guc('C2H2', 'Nm3', 'kg', 1), 1.175);
            assert.equal(guc('C2H2', 'Nm3', 'kg', 1.5), 1.7625);
            assert.equal(guc('C2H2', 'Nm3', 'kg', 1.234), 1.44995);
        });
        it('Sm3 to Nm3', () => { // 12
            assert.equal(guc('C2H2', 'Sm3', 'Nm3', 1), 0.886);
            assert.equal(guc('C2H2', 'Sm3', 'Nm3', 1.5), 1.329);
            assert.equal(guc('C2H2', 'Sm3', 'Nm3', 1.234), 1.093324);
        });
        it('kg to L', () => { // 1
            assert.equal(guc('C2H2', 'kg', 'L', 1), null);
        });
        it('L to kg', () => { // 4
            assert.equal(guc('C2H2', 'L', 'kg', 1), null);
        });
        it('L to Nm3', () => { // 5
            assert.equal(guc('C2H2', 'L', 'Nm3', 1), null);
        });
        it('L to Sm3', () => { // 6
            assert.equal(guc('C2H2', 'L', 'Sm3', 1), null);
        });
        it('Nm3 to L', () => { // 8
            assert.equal(guc('C2H2', 'Nm3', 'L', 1), null);
        });
        it('Sm3 to L', () => { // 11
            assert.equal(guc('C2H2', 'Sm3', 'L', 1), null);
        });
    });
});