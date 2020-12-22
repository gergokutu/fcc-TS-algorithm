// Pig Latin is a way of altering English Words. The rules are as follows:
// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
//  If a word begins with a vowel, just add "way" at the end.

// V1
// const translatePigLatin = (str: string): string => {
//   if (/^[aeiou]/i.test(str)) return str + 'way';
//   if (/[aeiou]/.test(str)) {
//     let lettersBeforeVowels: string[] = str.split(/[aeiou]/i, 1);
//     return (
//       str.slice(lettersBeforeVowels[0].length) + lettersBeforeVowels[0] + 'ay'
//     );
//   }
//   return str + 'ay';
// };

//V2
// const translatePigLatin = (str: string): string => {
//   return str
//     .replace(/^[aeiou]\w*/, '$&way')
//     .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay');
// };

//V3
const translatePigLatin = (str: string, charPos: number = 0): string => {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
    ? str + 'ay'
    : translatePigLatin(str.slice(1) + str[0], charPos + 1);
};

console.log('Should be aliforniacay >', translatePigLatin('california'));
