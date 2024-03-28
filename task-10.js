function solutionFn(number) {
    if (number < 10) {
        return number;
    }
    let result = 1;
    let localNumber = number;
    while (localNumber >= 10) {
        result = 1;
        while (localNumber > 0) {
            const digit = localNumber % 10;
            result *= digit;
            localNumber = Math.floor(localNumber / 10);
        }
        localNumber = result;
    }
    return result;
}

console.log(solutionFn(4));
console.log(solutionFn(42));
console.log(solutionFn(999));
