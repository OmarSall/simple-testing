import { getNegativeNumbers } from './getNegativeNumbers';

describe('getNegativeNumbers function', () => {
  it('should return only negative numbers from mixed array', () => {
    expect(getNegativeNumbers([1, -5, -3, 12, -152])).toEqual([-5, -3, -152]);
  });

  it('should return an empty array when there are no negative numbers', () => {
    expect(getNegativeNumbers([1, 2, 3, 4, 5])).toEqual([]);
  });

  it('should return the entire array if all numbers are negative', () => {
    expect(getNegativeNumbers([-1, -2, -3])).toEqual([-1, -2, -3]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(getNegativeNumbers([])).toEqual([]);
  });
});