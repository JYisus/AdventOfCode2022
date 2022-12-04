const getBiggestAmoutOfCalories = (caloriesList) => 
	caloriesList
		.split("\n\n")
		.map(elfCalories => elfCalories.split("\n").reduce((acc, actual) => acc + Number(actual), 0))
		.reduce((acc, current) => acc >= current ? acc : current, 0);

const getThreeBiggestAmoutOfCalories = (caloriesList) => {
	const biggestCaloriesThreesome = [];

	const res = caloriesList
		.split("\n\n")
		.map(elfCalories => elfCalories.split("\n").reduce((acc, actual) => acc + Number(actual), 0))
		.sort((a, b) => b-a)
		.slice(0, 3)
		.reduce((acc, actual) => acc + actual);

	return res
}

module.exports = {
	getBiggestAmoutOfCalories,
	getThreeBiggestAmoutOfCalories,
}

