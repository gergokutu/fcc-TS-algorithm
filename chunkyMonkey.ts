// Write a function that splits an array (first argument) into groups the length of size (second argument). 
// Returns them as a two-dimensional array.

interface IChunkParams {
  arr: number[] | string[];
  size: number;
}

//V1
// const chunkArrayInGroups = (params: IChunkParams): (string[] | number[])[] => {
//   const { arr, size } = params;
//   const result: (string[] | number[])[] = [];
//   while (arr.length) {
//     result.push(arr.splice(0, size));
//   }
//   return result;
// }

// V2
// const chunkArrayInGroups = (params: IChunkParams): (string[] | number[])[] => {
//   const { arr, size } = params;
//   const result: (string[] | number[])[] = [];
//   if (arr.length <= size) return [arr];
//   result.push(arr.splice(0, size));
//   return result.concat(chunkArrayInGroups({ arr, size }));
// };

// V3
const chunkArrayInGroups = (params: IChunkParams): (string[] | number[])[] => {
  const { arr, size } = params;
  return arr.length <= size
    ? [arr]
    : [arr.splice(0, size)].concat(chunkArrayInGroups({ arr, size }));
};

console.log("Should be [['a', 'b'], ['c', 'd']] >", chunkArrayInGroups({ arr: ["a", "b", "c", "d"], size: 2 }));