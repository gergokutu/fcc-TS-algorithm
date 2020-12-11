// Return the lowest index at which a value (second argument) should be inserted into an array (first argument).
// Once it has been sorted. The returned value should be a number.

interface IGetIndexParams {
  arr: number[];
  num: number;
}

// V1
// const getIndexToIns = (params: IGetIndexParams): number => {
//   const { arr, num } = params;
//   const sorted: number[] = arr.sort((a, b) => a - b);
//   const result: number = sorted.findIndex(n => n >= num);
//   return arr.length && result >= 0 ? result : arr.length;
// }

//V2
const getIndexToIns = (params: IGetIndexParams): number => {
  const { arr, num } = params;
  return arr.filter(n => num > n).length;
};

console.log('Should be 0 >', getIndexToIns({ arr: [3, 10, 5], num: 3 }));

