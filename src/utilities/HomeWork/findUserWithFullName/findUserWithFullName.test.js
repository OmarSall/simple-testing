import { findUserWithFullName } from './findUserWithFullName';

describe('findUserWithFullName function', () => {
  const usersArray = [
    {
      firstName: 'John',
      lastName: 'Smith',
      heightInCm: 184
    },
    {
      firstName: 'Kate',
      lastName: 'Williams',
      heightInCm: 169
    }
  ];

  it('should return the correct user when full name matches', () => {
    const result = findUserWithFullName(usersArray, 'Kate Williams');
    expect(result).toEqual({
      firstName: 'Kate',
      lastName: 'Williams',
      heightInCm: 169
    });
  });

  it('should return undefined when full name does not match', () => {
    const result = findUserWithFullName(usersArray, 'Alice Johnson');
    expect(result).toBeUndefined();
  });
});
