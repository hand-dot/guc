const units = ['kg', 'Nm3', 'Sm3', 'L'];
const gases = ['O2', 'N2', 'Ar', 'H2', 'CO2', 'He', 'C2H2'];
/**
 * 関数
 * @param {String} gas ['O2', 'N2', 'Ar', 'H2', 'CO2', 'He', 'C2H2']
 * @param {String} inputUnit ['kg', 'Nm3', 'Sm3', 'L']
 * @param {String} outputUnit ['kg', 'Nm3', 'Sm3', 'L']
 * @param {Number} input input amount
 * @return {Number} output amount
 * @throws {String} invalid arguments
 */
module.exports = function (gas, inputUnit, outputUnit, input) {
    if (gas === undefined || inputUnit === undefined || outputUnit === undefined || input === undefined) {
        throw new Error("Error: invalid arguments");
    }
    if (!gases.includes(gas) || !units.includes(inputUnit) || !units.includes(outputUnit) || isNaN(input)) {
        throw new Error("Error: invalid arguments");
    }
    console.log('!!')
    return 'hello'
}