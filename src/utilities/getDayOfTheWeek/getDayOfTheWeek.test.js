import { getDayOfTheWeek } from './getDayOfTheWeek';


describe('getDayOfTheWeek function', () => {
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  weekdays.forEach((dayName, index) => {
    it(`should return "${dayName}" when dayNumber is ${index}`, () => {
      expect(getDayOfTheWeek(index)).toBe(dayName);
    });
  });
  describe('when the dayNumber is out of range', () => {
    it('should return undefined when dayNumber is less than 0', () => {
      expect(getDayOfTheWeek(-1)).toBeUndefined();
    });

    it('should return undefined when dayNumber is greater than 6', () => {
      expect(getDayOfTheWeek(7)).toBeUndefined();
      expect(getDayOfTheWeek(999)).toBeUndefined();
    });
  })
});