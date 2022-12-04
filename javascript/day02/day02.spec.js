const { calculateTotalScore, calculateTotalScorePart2 } = require("./day02")
const fs = require("fs");

describe("Day 2: Rock Paper Scissors", () => {
	describe("Part 1", () => {
		it("should end with a score of 1 if the game is lost using rock", () => {
			expect(calculateTotalScore("B X")).toEqual(1);
		});

		it("should end with a score of 4 if the game is even using rock", () => {
			expect(calculateTotalScore("A X")).toEqual(4);
		});

		it("should end with a score of 7 if the game is won using rock", () => {
			expect(calculateTotalScore("C X")).toEqual(7);
		});

		it("should end with a score of 2 if the game is lost using paper", () => {
			expect(calculateTotalScore("C Y")).toEqual(2);
		});

		it("should end with a score of 5 if the game is even using paper", () => {
			expect(calculateTotalScore("B Y")).toEqual(5);
		});

		it("should end with a score of 8 if the game is won using paper", () => {
			expect(calculateTotalScore("A Y")).toEqual(8);
		});

		it("should end with a score of 3 if the game is lost using scissor", () => {
			expect(calculateTotalScore("A Z")).toEqual(3);
		});

		it("should end with a score of 6 if the game is even using scissor", () => {
			expect(calculateTotalScore("C Z")).toEqual(6);
		});

		it("should end with a score of 9 if the game is won using scissor", () => {
			expect(calculateTotalScore("B Z")).toEqual(9);
		});

		it("should return total score in multiple matches", () => {
			const input = `A Y
			B X
			C Z`.replace(/\t/g, "")
			expect(calculateTotalScore(input)).toEqual(15);
		});

		it("should return total score with real input", () => {
			const input = fs.readFileSync("./day02/data02.txt").toString();
			expect(calculateTotalScore(input)).toEqual(10624);
		});
	});

	describe("Part 2", () => {
		it("should get 3 points if opponent choose Rock (A) and you have to loose (X)", () => {
			expect(calculateTotalScorePart2("A X")).toEqual(3);
		});

		it("should get 4 points if opponent choose Rock (A) and you have to end in a draw (Y)", () => {
			expect(calculateTotalScorePart2("A Y")).toEqual(4);
		});

		it("should get 8 points if opponent choose Rock (A) and you have to win (Z)", () => {
			expect(calculateTotalScorePart2("A Z")).toEqual(8);
		});

		it("should get 1 points if opponent choose Paper (B) and you have to loose (X)", () => {
			expect(calculateTotalScorePart2("B X")).toEqual(1);
		});

		it("should get 5 points if opponent choose Paper (B) and you have to even (Y)", () => {
			expect(calculateTotalScorePart2("B Y")).toEqual(5);
		});

		it("should get 9 points if opponent choose Paper (B) and you have to win (Z)", () => {
			expect(calculateTotalScorePart2("B Z")).toEqual(9);
		});
		it("should get 2 points if opponent choose Scissors (C) and you have to loose (X)", () => {
			expect(calculateTotalScorePart2("C X")).toEqual(2);
		});
		it("should get 6 points if opponent choose Scissors (C) and you have to even (Y)", () => {
			expect(calculateTotalScorePart2("C Y")).toEqual(6);
		});
		it("should get 7 points if opponent choose Scissors (C) and you have to win (Z)", () => {
			expect(calculateTotalScorePart2("C Z")).toEqual(7);
		});

		it("should get a 12 score in a small input of matches", () => {
			const input = `A Y
			B X
			C Z`.replace(/\t/g, "");
			expect(calculateTotalScorePart2(input)).toEqual(12);
		});

		it("should return the correct value with real input", () => {
			const input = fs.readFileSync("./day02/data02.txt").toString();
			expect(calculateTotalScorePart2(input)).toEqual(14060);
		})
	});
});