// Return true if the string in the first element of the array
// contains all of the letters of the string in the second element of the array.
// ["Alien", "line"] > true

// V1
// const mutation = (arr: string[]): boolean => {
//   const first: string[] = [...new Set(arr[0].toLowerCase())];
//   const second: string[] = [...new Set(arr[1].toLowerCase())];
//   let found: string[] = [];

//   if (first.length < second.length) return false;

//   for (let i = 0; i < second.length; i++) {
//     for (let j = 0; j < first.length; j++) {
//       if (first[j] === second[i]) {
//         found.push(first[j]);
//       }
//     }
//   }

//   return found.join('') === second.join('');
// };

// V2
// const mutation = (arr: string[]): boolean => {
//   const target: string = arr[0].toLowerCase();
//   const test: string = arr[1].toLowerCase();

//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) === -1) {
//       return false;
//     }
//   }

//   return true;
// };

//V3
const mutation = (arr: string[]): boolean => {
  const target: string = arr[0].toLowerCase();
  const test: string[] = arr[1].toLowerCase().split('');
  const res = test.every(letter => target.includes(letter));
  return res;
};

console.log('Should be false >', mutation(['elloh', 'eohy']));
