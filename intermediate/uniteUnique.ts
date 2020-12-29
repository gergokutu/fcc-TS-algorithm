// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// V1 Turn StrictNullCheck false
// const uniteUnique = (...arr: any): number[] => {
//   const combinedArr: number[] = [].concat(...arr);
//   return [...new Set(combinedArr)];
// };

//V2
const uniteUnique = <T>(...arr: T[]): T[] => {
  const flatArray: T[] = [];
  const combinedArr: T[] = flatArray.concat(...arr);
  return [...new Set(combinedArr)];
};

console.log(
  'Should be [1, 3, 2, 5, 4] >',
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);
