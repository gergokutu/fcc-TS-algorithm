// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

//V1
const sumFibs = (num: number): number => {
  const fibonacciNum: number[] = [];
  let prevNum: number = 0;
  let currentNum: number = 1;
  while (currentNum <= num) {
    fibonacciNum.push(currentNum);
    currentNum = currentNum + prevNum;
    prevNum = currentNum - prevNum;
  }
  return fibonacciNum.filter(num => num % 2 !== 0).reduce((a, b) => a + b, 0);
};

//V2
// const sumFibs = (num: number): number => {
//   const fibonacciNum: number[] = [1, 0];
//   let nextNum: number = 1;
//   while ((nextNum = fibonacciNum[0] + fibonacciNum[1]) <= num) {
//     fibonacciNum.unshift(nextNum);
//   }
//   return fibonacciNum.filter(num => num % 2 !== 0).reduce((a, b) => a + b, 0);
// };

console.log('Should be 5 >', sumFibs(4));
