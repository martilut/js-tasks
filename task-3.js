function sum(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') {
        throw new Error('Operands are not numbers');
    } else if (typeof b !== 'number') {
        throw new Error('The right operand is not number');
    } else if (typeof a !== 'number') {
        throw new Error('The left operand is not number');
    } else {
        return a + b;
    }
}

function trySum(a, b) {
    try {
        console.log(sum(a, b));
    } catch (error) {
        console.error(error.message);
    }
}

trySum(1, 2)
trySum('1', 2)
trySum(1, '2')
trySum('1', '2')
