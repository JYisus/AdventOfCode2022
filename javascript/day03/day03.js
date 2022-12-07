const getDuplicatedItemsPriorities = (rucksacks) => {

    return rucksacks
            .split("\n")
            .map(getDuplicatedItemPriority)
            .reduce((acc, actual) => acc + actual)
}

const getDuplicatedItemPriority = (rucksack) => {
    const firstHalf = rucksack.slice(0, rucksack.length/2);
    const secondHalf = rucksack.slice(rucksack.length/2, rucksack.length);

    for (let i = 0; i < firstHalf.length; i++) {
        if (secondHalf.indexOf(firstHalf[i]) > -1) return getItemPriority(firstHalf[i]);
    }
    return 0;
}

const getItemPriority = (item) => {
    return item.charCodeAt() >= 95
        ? item.charCodeAt() - 96
        : item.charCodeAt() - 65 + 27;
}

const getRepeatedItemInGroup = (item) => {
    const rucksacks = item.split("\n")
        .filter(val => val !== "");

    let sum = 0;
    for(let j = 0; j < rucksacks.length; j+=3) {
        sum += getRepeatedItemPriority(rucksacks.slice(j, j + 3));
    }
    return sum;
}

const getRepeatedItemPriority = (rucksacks) => {
    const itemsStored = {};

    for (let i = 0; i < rucksacks[0].length; i++) {
        const item = rucksacks[0][i];
        itemsStored[item] = 1;
    }

    for (let i = 0; i < rucksacks[1].length; i++) {
        const item = rucksacks[1][i];
        if (itemsStored[item]) itemsStored[item] = 2;
        // console.log({item, stored: itemsStored[item]})
    }

    for (let i = 0; i < rucksacks[2].length; i++) {
        const item = rucksacks[2][i];
        if (itemsStored[item] === 2) {
            return getItemPriority(item);
        }
    }
    return 0;
}

module.exports = {
	getDuplicatedItemsPriorities,
    getRepeatedItemInGroup,
}
