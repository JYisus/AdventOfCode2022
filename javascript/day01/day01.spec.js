const { getBiggestAmoutOfCalories, getThreeBiggestAmoutOfCalories } = require("./day01");
const fs = require("fs");

describe("Day 01", () => {
	describe("part 1", () => {
		it("should return the biggest in groups with length 1", () => {
			const caloriesList = `20
	
			100
	
			20
	
			50
			`.replace(/\t/g, "")
			const actual = getBiggestAmoutOfCalories(caloriesList);	
			const expected = 100;
	
			expect(actual).toEqual(expected);
		});
	
		it("should return the biggest in groups with multiple foods", () => {
			const caloriesList = `20
	
			100
			5
	
			20
			300
	
			50
			`.replace(/\t/g, "");
			const actual = getBiggestAmoutOfCalories(caloriesList);	
			const expected = 320;
	
			expect(actual).toEqual(expected);
		});
	
		it("should find the elf with most calories", () => {
			const caloriesList = fs.readFileSync("./day01/data01.txt").toString();
			const actual = getBiggestAmoutOfCalories(caloriesList);	
			const expected = 72718;
	
			expect(actual).toEqual(expected);
		});
	});

	describe("part 2", () => {
		it("should find the three elfs with more calories and sum its calories with just one food per elf", () => {
			const caloriesList = `100

			3

			4
			
			5
			
			6`.replace(/\t/g, "");
			const actual = getThreeBiggestAmoutOfCalories(caloriesList);
			expect(actual).toEqual(111);
		});

		it("should find the three elfs with more calories and sum its calories with real values", () => {
			const caloriesList = fs.readFileSync("./day01/data01.txt").toString();
			const actual = getThreeBiggestAmoutOfCalories(caloriesList);
			expect(actual).toEqual(213089);
		});
	});
	
});

