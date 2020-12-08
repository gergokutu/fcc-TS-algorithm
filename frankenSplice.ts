// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
interface IFrankenParams {
  arr1: number[];
  arr2: number[];
  n: number;
}

// V1
const frankenSplice = (params: IFrankenParams): number[] => {
  const { arr1, arr2, n } = params;
  const result: number[] = [...arr2];
  result.splice(n, 0, ...arr1);
  return result;
};

// V2
// const frankenSplice = (params: IFrankenParams): number[] => {
//   const { arr1, arr2, n } = params;
//   const firstPart: number[] = arr2.slice(0, n);
//   const remaining: number[] = arr2.slice(n);
//   const result = firstPart.concat(arr1.concat(remaining));
//   return result;
// };

console.log('Should be [4, 1, 2, 3, 5, 6] >', frankenSplice({ arr1: [1, 2, 3], arr2: [4, 5, 6], n: 1 }));
