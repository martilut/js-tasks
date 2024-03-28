function theWorld(ms, seconds, callback) {
    let remainingSecondsNumber = seconds;
    if (seconds === -1) {
        remainingSecondsNumber = Math.ceil(ms / 1000);
    }
    setTimeout(function() {
        console.log(`Time will continue running in ${remainingSecondsNumber}`);
        remainingSecondsNumber--;
        if (remainingSecondsNumber >= 0) {
            theWorld(ms, remainingSecondsNumber, callback);
        } else {
            callback();
        }
    }, 1000);
}

console.log('Выведется до остановки времени');
theWorld(3000, -1, function() {
    console.log('Выведется после того, как время продолжит ход');
});
