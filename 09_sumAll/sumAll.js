const sumAll = function(a, b) {
    // Check if both inputs are numbers and integers
    if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    
    // Check for negative numbers
    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    // Ensure a is less than b
    if (a > b) {
        [a, b] = [b, a];
    }

    // Calculate the sum of all integers from a to b
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
