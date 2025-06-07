export function findUserWithFullName(users, fullName) {
  return users.find(user => `${user.firstName} ${user.lastName}` === fullName);
}