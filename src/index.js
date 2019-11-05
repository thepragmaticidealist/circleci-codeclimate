// Disable eslint do not modify native methods
/* eslint-disable no-extend-native */

String.prototype.isQuestion = function isQuestion() {
  // Returns true if the last letter of the input string a question mark. False otherwise
  const questionable = new RegExp(/\?$/);
  return questionable.test(this);
};

String.prototype.hasVowels = function hasVowels() {
  // Returns true if a vowel exists in the input string. Returns false otherwise.
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};

String.prototype.toUpper = function toUpper() {
  /* Replace all lowercase letters in the input string with their uppercase
  * analogs by converting each letter's ASCII value to decimal then back to
  * ASCII
  */
  const upper = new RegExp('[a-z]', 'g');
  return this.replace(upper, function transform(letter) {
    return String.fromCharCode(letter.charCodeAt(0) - 32);
  });
};

String.prototype.toLower = function toLower() {
  const lower = new RegExp('[A-Z]', 'g');
  return this.replace(lower, function transform(letter) {
    return String.fromCharCode(letter.charCodeAt(0) + 32);
  });
};

