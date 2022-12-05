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
        : item.charCodeAt() - 65 + 27
}

module.exports = {
	getDuplicatedItemsPriorities,
}
