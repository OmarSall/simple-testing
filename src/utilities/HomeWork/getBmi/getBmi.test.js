import { getBmi } from './getBmi';

describe('getBmi function', () => {
  it('should return "Underweight" for 50kg and 1.8m', () => {
    expect(getBmi(50, 1.8)).toBe('Underweight');
  });

  it('should return "Normal" for 60kg and 1.8m', () => {
    expect(getBmi(60, 1.8)).toBe('Normal');
  });

  it('should return "Overweight" for 90kg and 1.8m', () => {
    expect(getBmi(90, 1.8)).toBe('Overweight');
  });

  it('should return "Obese" for 100kg and 1.8m', () => {
    expect(getBmi(100, 1.8)).toBe('Obese');
  });
});