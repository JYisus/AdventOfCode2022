const evenScore = 3;
const winScore = 6;

const calculateTotalScore = (matches) => {
    return matches
        .split("\n")
        .filter(val => val !== "")
        .map(calculateMatchScore)
        .reduce((acc, actual) => acc + actual, 0);
}

const calculateMatchScore = (match) => {
    const [oponent, player] = getMatchInputsValues(match);

    if (isMatchEven(player, oponent)) return player + evenScore + 1;
    if (isMatchWon(player, oponent)) return player + winScore + 1;

    return player + 1;
}

const getMatchInputsValues = (match) => {
    const inputs = match.split(" ")
    const oponentValue = inputs[0].charCodeAt() % 65;
    const playerValue = (inputs[1].charCodeAt() - "X".charCodeAt()) % 65;

    return [oponentValue, playerValue];
}

const isMatchEven = (player, oponent) => player === oponent;
const isMatchWon = (player, oponent) => player === ((oponent + 1) % 3);

const calculateTotalScorePart2 = (matches) => {
    return matches
        .split("\n")
        .filter(val => val !== "")
        .map(calculateMatchScorePart2)
        .reduce((acc, actual) => acc + actual, 0);
}

const calculateMatchScorePart2 = (match) => {
    const [oponent, action] = getMatchInputsValues(match);
    if (action === 1) return evenScore + getPlayerSelection(oponent, action) + 1;
    if (action === 2) return winScore + getPlayerSelection(oponent, action) + 1;
    return getPlayerSelection(oponent, action) + 1;
}

const getPlayerSelection = (oponent, action) => oponent + action - 1 < 0
    ? oponent + action + 2
    : (oponent + action - 1) % 3

module.exports = {
    calculateTotalScore,
    calculateTotalScorePart2,
}
