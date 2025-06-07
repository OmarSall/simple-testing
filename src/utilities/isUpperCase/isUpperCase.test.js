import { isUpperCase } from './isUpperCase';

describe('The isUpperCase function', () => {
  describe('when the string is uppercase', () => {
    it('Should return true', () => {
      const result = isUpperCase('HELLO');
      expect(result).toBe(true);
  });
  });
  describe('when the string is not uppercase', () => {
    it('Should return false', () => {
      const result = isUpperCase('hello');
      expect(result).toBe(false);
    });
  })
});