const units = ['kg', 'L', 'Nm3', 'Sm3'];
const gases = ['O2', 'N2', 'Ar', 'H2', 'CO2', 'He', 'C2H2'];
const ratios = {
    O2: {
        kg: {L: 0.876,Nm3: 0.700,Sm3: 0.789},
        L: {kg: 1.141,Nm3: 0.799,Sm3: 0.901},
        Nm3: {kg: 1.429,L: 1.252,Sm3: 1.128},
        Sm3: {kg: 1.267,L: 1.110,Nm3: 0.886
        }
    },
    N2: {
        kg: {L: 1.237,Nm3: 0.800,Sm3: 0.902},
        L: {kg: 0.809,Nm3: 0.646,Sm3: 0.729},
        Nm3: {kg: 1.251,L: 1.547,Sm3: 1.128},
        Sm3: {kg: 1.109,L: 1.371,Nm3: 0.886
        }
    },
    Ar: {
        kg: {L: 0.715,Nm3: 0.561,Sm3: 0.633},
        L: {kg: 1.398,Nm3: 0.784,Sm3: 0.885},
        Nm3: {kg: 1.783,L: 1.275,Sm3: 1.128},
        Sm3: {kg: 1.580,L: 1.130,Nm3: 0.886
        }
    },
    H2: {
        kg: {L: 14.100,Nm3: 11.14,Sm3: 12.56},
        L: {kg: 0.071,Nm3: 0.790,Sm3: 0.891},
        Nm3: {kg: 0.090,L: 1.267,Sm3: 1.128},
        Sm3: {kg: 0.080,L: 1.122,Nm3: 0.886
        }
    },
    CO2: {
        kg: {L: 0.971,Nm3: 0.506,Sm3: 0.571},
        L: {kg: 1.030,Nm3: 0.506,Sm3: 0.588},
        Nm3: {kg: 1.977,L: 1.919,Sm3: 1.128},
        Sm3: {kg: 1.752,L: 1.701,Nm3: 0.886
        }
    },
    He: {
        kg: {L: 8.013,Nm3: 5.602,Sm3: 6.320},
        L: {kg: 0.125,Nm3: 0.699,Sm3: 0.789},
        Nm3: {kg: 0.179,L: 1.430,Sm3: 1.128},
        Sm3: {kg: 0.158,L: 1.268,Nm3: 0.886
        }
    },
    C2H2: {
        kg: {L: null,Nm3: 0.851,Sm3: 0.898},
        L: {kg: null,Nm3: null,Sm3: null},
        Nm3: {kg: 1.175,L: null,Sm3: 1.128},
        Sm3: {kg: 1.114,L: null,Nm3: 0.886
        }
    },
}
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
    if (inputUnit === outputUnit) {
        return input;
    }
    const ratio = ratios[gas][inputUnit][outputUnit]
    return ratio ? input * ratio : null;
}