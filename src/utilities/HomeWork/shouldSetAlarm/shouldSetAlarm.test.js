import { shouldSetAlarm } from './shouldSetAlarm';

describe('shouldSetAlarm function', () => {
  it('should return true when employed and not on vacation', () => {
    expect(shouldSetAlarm({ isEmployed: true, isOnVacation: false })).toBe(true);
  });

  it('should return false when employed and on vacation', () => {
    expect(shouldSetAlarm({ isEmployed: true, isOnVacation: true })).toBe(false);
  });

  it('should return false when not employed and not on vacation', () => {
    expect(shouldSetAlarm({ isEmployed: false, isOnVacation: false })).toBe(false);
  });

  it('should return false when not employed and on vacation', () => {
    expect(shouldSetAlarm({ isEmployed: false, isOnVacation: true })).toBe(false);
  });
});
