function solutionFn(obj, countNested = false) {
    let typeStorage = {};

    for (let key in obj) {
        let type = typeof obj[key];

        if (typeStorage[type]) {
            typeStorage[type]++;
        } else {
            typeStorage[type] = 1;
        }

        if (type === 'object' && countNested) {
            let nestedObj = obj[key];
            for (let nestedKey in nestedObj) {
                let nestedType = typeof nestedObj[nestedKey];
                if (typeStorage[nestedType]) {
                    typeStorage[nestedType]++;
                } else {
                    typeStorage[nestedType] = 1;
                }
            }
        }
    }

    // Return the type frequencies object
    return typeStorage;
}

// Example usage:
const initialObj = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};

console.log("Without nested objects:");
console.log(solutionFn(initialObj));
console.log("With nested objects:");
console.log(solutionFn(initialObj, true));
