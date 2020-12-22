// Perform a search and replace on the sentence
// using the arguments provided and return the new sentence.
// Preserve the first case: Book > Dog

interface IMyReplace {
  str: string;
  before: string;
  after: string;
}

// v1
const myReplace = (param: IMyReplace): string => {
  const { before, after, str } = param;
  const myRegExp: RegExp = new RegExp(`${before}`, 'g');

  return str.replace(myRegExp, match => {
    return before[0] === before[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after.toLowerCase();
  });
};

// v2
// const myReplace = (param: IMyReplace) => {
//   const { before, after, str } = param;
//   const words: string[] = str.split(' ');

//   return words
//     .map(word => {
//       if (word === before) {
//         return word[0] === word[0].toUpperCase()
//           ? after[0].toUpperCase() + after.slice(1)
//           : after.toLowerCase();
//       } else {
//         return word;
//       }
//     })
//     .join(' ');
// };

// v3
// const myReplace = (param: IMyReplace) => {
//   const { before, after, str } = param;
//   const words: string[] = str.split(' ');
//   const index: number = words.findIndex(word => word === before);

//   words[index] =
//     before[0] === before[0].toUpperCase()
//       ? after[0].toUpperCase() + after.slice(1)
//       : after.toLowerCase();

//   return words.join(' ');
// };

// v4
// const myReplace = (param: IMyReplace): string => {
//   let { before, after, str } = param;
//   // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
//   if (/^[A-Z]/.test(before)) {
//     after = after[0].toUpperCase() + after.substring(1);
//   } else {
//     after = after[0].toLowerCase() + after.substring(1);
//   }

//   // return string with argument "before" replaced by argument "after" (with correct case)
//   return str.replace(before, after);
// };

console.log(
  'Should be "I think we should look down there" >',
  myReplace({
    str: '"I think we should look up there"',
    before: 'up',
    after: 'Down'
  })
);
