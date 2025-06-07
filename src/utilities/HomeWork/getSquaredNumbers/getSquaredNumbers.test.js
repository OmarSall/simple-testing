import { getSquaredNumbers } from './getSquaredNumbers';

describe('getSquaredNumbers function', () => {
  it('should return [1, 4, 9, 16, 25] for [1, 2, 3, 4, 5]', () => {
    expect(getSquaredNumbers([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
  });

  it('should return [36, 49, 64, 81, 100] for [6, 7, 8, 9, 10]', () => {
    expect(getSquaredNumbers([6, 7, 8, 9, 10])).toEqual([36, 49, 64, 81, 100]);
  });

  it('should return an empty array for an empty input', () => {
    expect(getSquaredNumbers([])).toEqual([]);
  });

  it('should handle negative numbers correctly', () => {
    expect(getSquaredNumbers([-1, -2, -3])).toEqual([1, 4, 9]);
  });
});