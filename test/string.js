const expect = require('chai').expect;

require('../src/index');

describe('String extension tests', function () {
  describe('isQuestion', function () {
    it('Should return true if given a question', function () {
      expect('To be or not to be, that is the question'.isQuestion()).to.equal(false);
      expect('Quis custodiet ipsos custodes?'.isQuestion()).to.equal(true);
    });
  });

  describe('hasVowels', () => {
    it('should return false if the string has no vowels', () => {
      expect('N VWLS'.hasVowels()).to.equal(false);
      expect('n vwls'.hasVowels()).to.equal(false);
      expect('@#$^&*%12345'.hasVowels()).to.equal(false);
      expect(' '.hasVowels()).to.equal(false);
    });

    it('should return true if the string has vowels', () => {
      expect('Has vowels'.hasVowels()).to.equal(true);
      expect('HAS VOWELS'.hasVowels()).to.equal(true);
      expect('H@s v0wels'.hasVowels()).to.equal(true);
      expect('@#$^&*% 12345 e'.hasVowels()).to.equal(true);
    });

    it('should return a boolean value', () => {
      expect(typeof ('1234'.hasVowels())).to.equal('boolean');
    });
  });

  describe('toUpper', () => {
    it('should return a string', () => {
      expect(typeof 'Lowercase'.toUpper()).to.equal('string');
    });

    it('should return the string passed in uppercase', () => {
      expect('lowercase'.toUpper()).to.equal('LOWERCASE');
      expect('LowerCase'.toUpper()).to.equal('LOWERCASE');
      expect('L0werCAs3& letters'.toUpper()).to.equal('L0WERCAS3& LETTERS');
      expect(''.toUpper()).to.equal('');
    });
  });

  describe('toLower', () => {
    it('should return a string', () => {
      expect(typeof 'Lowercase'.toLower()).to.equal('string');
    });

    it('should return the string passed in lowercase', () => {
      expect('LOWERCASE'.toLower()).to.equal('lowercase');
      expect('LowerCase'.toLower()).to.equal('lowercase');
      expect('L0werCAs3& letters'.toLower()).to.equal('l0wercas3& letters');
      expect(''.toLower()).to.equal('');
    });
  });
});

