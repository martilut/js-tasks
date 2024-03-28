function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max + 1);
    return Math.floor(
        Math.random() * (maxFloored - minCeiled) + minCeiled
    );
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0 && num !== i) return false;
    }
    return true;
}

function hitOrRun(a, b) {
    const randInt = getRandomInt(a, b);
    console.log(randInt);
    const isPrimeValue = isPrime(randInt);
    if (isPrimeValue) return "run";
    return "hit";
}

const result = hitOrRun(1, 100);
console.log(result);
