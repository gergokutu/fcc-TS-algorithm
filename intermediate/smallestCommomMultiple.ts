// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.

//V1
const smallestCommons = (arr: number[]): number => {
  const sortedArr: number[] = arr.sort((a, b) => b - a);
  const ranges: number[] = [];
  for (let i = sortedArr[0]; i >= sortedArr[1]; i--) {
    ranges.push(i);
  }

  let smallestCommon: number = ranges[0] * ranges[1];
  let increment: number = ranges[0] * ranges[1];
  while (true) {
    const check: boolean = ranges.every(item => smallestCommon % item === 0);
    if (check) return smallestCommon;
    smallestCommon += increment;
  }
};

// V2
// const smallestCommons = (arr: number[]): number => {
//   const sortedArr: number[] = arr.sort((a, b) => a - b);
//   const range: number[] = [];
//   for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
//     range.push(i);
//   }

//   let sc: number = sortedArr[1];
//   while (true) {
//     const check: boolean = range.every(num => sc % num === 0);
//     if (check) return sc;
//     sc++;
//   }
// };

console.log('Should be 60 >', smallestCommons([1, 5]));
