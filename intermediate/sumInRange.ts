// We'll pass you an array of two numbers.
// Return the sum of those two numbers plus
// the sum of all the numbers between them.
// The lowest number will not always come first.

/* For example, sumAll([4,1]) 
should return 10 because sum of all the numbers 
between 1 and 4 (both inclusive) is 10. */

// V1
// const sumAll = (arr: number[]): number => {
//   const sorted: number[] = [...arr].sort((a, b) => a - b);
//   let sum: number = 0;

//   for (let i = sorted[0]; i <= sorted[1]; i++) {
//     sum += i;
//   }

//   return sum;
// };

// V2
// const sumAll = (arr: number[], i: number = arr[0]): number => {
//   const sorted: number[] = [...arr].sort((a, b) => a - b);
  
//   return i < sorted[1]
//     ? i + sumAll(sorted, i + 1)
//     : i;
// };

// V3
const sumAll = ([firstNum, lastNum]: number[]): number => {
  const step: number = firstNum < lastNum
    ? 1
    : -1;

  return firstNum === lastNum 
    ? firstNum
    : firstNum + sumAll([firstNum + step, lastNum]);
};

console.log('Should be 10 > ', sumAll([4, 1]));