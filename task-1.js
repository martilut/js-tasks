function task1(array, filterFn, inplace = false) {
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (filterFn(array[i])) {
            if (inplace) {
                array.splice(i, 1);
                i--;
            }
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function checkLength(word) {
    return word.length >= 6;
}
console.log(task1(words, checkLength));
