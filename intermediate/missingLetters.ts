// v1
const fearNotLetter = (str: string): string | undefined => {
  const firstLetterCode: number = str.charCodeAt(0);

  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) !== firstLetterCode + i) {
      return String.fromCharCode(firstLetterCode + i);
    }
  }
  return undefined;
};

// v2
// const fearNotLetter = (str: string): string | undefined => {
//   const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
//   const first: number = alphabet.indexOf(str[0]);

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== alphabet[first + i]) return alphabet[first + i];
//   }

//   return undefined;
// };

console.log('Should be e >', fearNotLetter('bcdf'));
