const { getDuplicatedItemsPriorities, getRepeatedItemInGroup } = require("./day03");
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

	describe.only("Part 2", () => {
		it("should calculate the item that the 3 elves of the group has", () => {
			const input = `vJrwpWtwJgWrhcsFMMfFFhFp
			jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
			PmmdzqPrVvPwwTWBwg`.replace(/\t/g, "");
			expect(getRepeatedItemInGroup(input)).toEqual(18);
		});

		it("should calculate the item that the 3 elves of the group has (example 2)", () => {
			const input = `wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
			ttgJtRGJQctTZtZT
			CrZsJsPPZsGzwwsLwLmpwMDw`.replace(/\t/g, "");
			expect(getRepeatedItemInGroup(input)).toEqual(52);
		});

		it("should calculate the sum of the priorities of the items repeated in 2 groups", () => {
			const input = `vJrwpWtwJgWrhcsFMMfFFhFp
			jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
			PmmdzqPrVvPwwTWBwg
			wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
			ttgJtRGJQctTZtZT
			CrZsJsPPZsGzwwsLwLmpwMDw`.replace(/\t/g, "");
			expect(getRepeatedItemInGroup(input)).toEqual(70);
		});

		it.only("should calculate the sum of the priorities in the real case", () => {
			const input = fs.readFileSync("./day03/data03.txt").toString();
			expect(getRepeatedItemInGroup(input)).toEqual(2581);
		});
	});
});
