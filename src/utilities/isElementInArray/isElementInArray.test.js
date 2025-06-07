import { isElementInArray } from "./isElementInArray";

describe("The isElementInArray", () => {
  describe("when provided with a valid array of strings", () => {
    let array;
    beforeEach(() => {
      array = ["orange", "banana", "strawberry"];
    });

    describe("and the desired element is not in the array", () => {
      it("should return false", () => {
        const result = isElementInArray(array, "coconut");
        expect(result).toBe(false);
      });
    });
  });
  describe('when provided with an array of numbers', () => {
    let numberArray;
    beforeEach(() => {
      numberArray = [10, 20, 30, 40, 50];
    });

    describe('and the desired element is not in the array', () => {
      it('should return false', () => {
        const result = isElementInArray(numberArray, 99);
        expect(result).toBe(false);
      });
    });

    describe('and the desired element is in the array', () => {
      it('should return true', () => {
        const result = isElementInArray(numberArray, 30);
        expect(result).toBe(true);
      });
    });
  });
  describe('when testing that the array is not mutated', () => {
    let testArray;
    beforeEach(() => {
      testArray = [10, 20, 30, 40, 50];
    });

    it('should not mutate the original array', () => {
      const arrayCopy = [...testArray];
      isElementInArray(testArray, 30);
      expect(testArray).toEqual(arrayCopy);
    });
    }
  )
  });
