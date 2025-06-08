import { isElementInArray } from "./isElementInArray";

describe("The isElementInArray function", () => {
  describe("when provided with a valid array of strings", () => {
    let array;
    beforeEach(() => {
      array = ["orange", "banana", "strawberry"];
    });

    describe("and the desired element is not in the array", () => {
      it("should return false", () => {
        const result = isElementInArray([...array], "coconut");
        expect(result).toBe(false);
      });
    });

    describe("and the desired element is in the array", () => {
      it("should return true", () => {
        const result = isElementInArray([...array], "strawberry");
        expect(result).toBe(true);
      });
    });
  });

  describe("when provided with an array of numbers", () => {
    let numberArray;
    beforeEach(() => {
      numberArray = [10, 20, 30, 40, 50];
    });

    describe("and the desired element is not in the array", () => {
      it("should return false", () => {
        const result = isElementInArray([...numberArray], 99);
        expect(result).toBe(false);
      });
    });

    describe("and the desired element is in the array", () => {
      it("should return true", () => {
        const result = isElementInArray([...numberArray], 30);
        expect(result).toBe(true);
      });
    });
  });
});