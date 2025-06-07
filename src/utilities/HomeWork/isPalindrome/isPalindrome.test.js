import { isPalindrome } from './isPalindrome';

describe('isPalindrome function', () => {
  it('should return true for "Kayak"', () => {
    expect(isPalindrome('Kayak')).toBe(true);
  });

  it('should return true for "Racecar"', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });

  it('should return true for "Was it a cat I saw"', () => {
    expect(isPalindrome('Was it a cat I saw')).toBe(true);
  });

  it('should return false for "Hello!"', () => {
    expect(isPalindrome('Hello!')).toBe(false);
  });
});

