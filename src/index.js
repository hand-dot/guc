const units = ['kg', 'Nm3', 'Sm3', 'L'];
const gases = ['O2', 'N2', 'Ar', 'H2', 'CO2', 'He', 'C2H2'];

module.exports = function (gas, amount, inputUnit, outputUnit) {
    if (gas === undefined || amount === undefined || inputUnit === undefined || outputUnit === undefined) {
        throw new Error("Error: invalid arguments");
    }
    if (!gases.includes(gas) && !isNaN(amount) && !units.includes(inputUnit) && !units.includes(outputUnit)) {
        throw new Error("Error: invalid arguments");
    }
    return 'hello'
}