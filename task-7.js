function replaceChar(underscore, char) {
    return char.toUpperCase()
}

function snakeToCamel(snakeData) {
    return snakeData.replace(/_([a-z])/g, replaceChar)
}

const snakeData = 'data_in_snake_case';

const result = snakeToCamel(snakeData);
console.log(result);
