const { getDuplicatedItemsPriorities } = require("./day03");
const fs = require("fs");

describe("Day 3: Rucksack Reorganization", () => {
	describe("Part 1", () => {
		it("calculates the priority of the item duplicated in a rucksack", () => {
			expect(getDuplicatedItemsPriorities("vJrwpWtwJgWrhcsFMMfFFhFp")).toEqual(16);
		});

		it("calculates the priority of the item duplicated in a rucksack with capital letter ducplicated", () => {
			expect(getDuplicatedItemsPriorities("jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL")).toEqual(38);
		});

		it("calculates the priority of the item duplicated in multiple rucksacks", () => {
			const input = `vJrwpWtwJgWrhcsFMMfFFhFp
			jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
			PmmdzqPrVvPwwTWBwg
			wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
			ttgJtRGJQctTZtZT
			CrZsJsPPZsGzwwsLwLmpwMDw`.replace(/\t/g, "")			
			expect(getDuplicatedItemsPriorities(input)).toEqual(157);
		});

		it("calculates the priority of the items priorities with real input", () => {
			const input = fs.readFileSync("./day03/data03.txt").toString();
			expect(getDuplicatedItemsPriorities(input)).toEqual(7850);
		});
	});
});
