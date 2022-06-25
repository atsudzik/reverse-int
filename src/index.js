module.exports = function reverse(n) {
    const positiveNamber = Math.abs(n);
    const string = String(positiveNamber);
    const splitReverse = string.split("");
    const splitString = splitReverse[0];
    const reverseArray = splitReverse.reverse();
    const joinReverse = reverseArray.join("");

    return Number(joinReverse);
};
