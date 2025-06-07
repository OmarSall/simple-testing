import { isEven } from './isEven';

describe('isEven function', () => {
  it('should return true for 4', () => {
    expect(isEven(4)).toBe(true);
  });

  it('should return false for 5', () => {
    expect(isEven(5)).toBe(false);
  });

  it('should return true for 0', () => {
    expect(isEven(0)).toBe(true);
  });

  it('should return true for -4', () => {
    expect(isEven(-4)).toBe(true);
  });

  it('should return false for -5', () => {
    expect(isEven(-5)).toBe(false);
  });
});