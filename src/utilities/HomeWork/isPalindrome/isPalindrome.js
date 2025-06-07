export function isPalindrome(string) {
  const cleanedString = string.toLowerCase().replace(/\s+/g, '');
  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
}
