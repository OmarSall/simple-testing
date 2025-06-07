import { getSmallestNumber } from './getSmallestNumber';

describe('getSmallestNumber function', () => {
  it('should return -5 for [2, -5, 10, 1, 4]', () => {
    expect(getSmallestNumber([2, -5, 10, 1, 4])).toBe(-5);
  });

  it('should return 4 for [200, 25, 4, 123, 87]', () => {
    expect(getSmallestNumber([200, 25, 4, 123, 87])).toBe(4);
  });

  it('should return the number itself when array has only one element', () => {
    expect(getSmallestNumber([42])).toBe(42);
  });

  it('should return Infinity when array is empty', () => {
    expect(getSmallestNumber([])).toBe(Infinity);
  });
});