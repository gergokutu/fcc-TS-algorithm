// Create a function that sums two arguments together.
// If only one argument is provided,
// then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// type FunctionType =
//   | ((...numbers: number[]) => number)
//   | ((num1: number) => (num2: number) => number);

// const addTogether: FunctionType = () => {
//   return 5;
// };

const addTogetherSpread = (...numbers: number[]): number => {
  return numbers.reduce((sum, value) => sum + value, 0);
};

const addTogetherCurrying = (num1: number) => (num2: number): number => {
  return num1 + num2;
};

console.log('Should be 5 (a)>', addTogetherSpread(2, 3));
console.log('Should be 5 (b)>', addTogetherCurrying(2)(3));

// type FunctionType1 =
//   | ((x: string, y: number) => number)
//   | ((str: string) => string);

// const justReturn1: FunctionType1 = (word: string, num: number) => num;
// const justReturn2: FunctionType1 = (word: string) => word;
// console.log(justReturn1('s', 1));
// console.log(justReturn2('s'));
