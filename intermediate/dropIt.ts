// Return rest of the array from the first true result
interface IDropElements {
  arr: number[];
  func: (value: number) => boolean;
}

// v1
// const dropElements = (param: IDropElements): number[] => {
//   const { arr, func } = param;
//   const index: number = arr.findIndex(num => func(num));
//   return arr.slice(index === -1 ? arr.length : index);
// };

// v2
// const dropElements = (param: IDropElements): number[] => {
//   const { arr, func } = param;
//   const index: number = arr.findIndex(num => func(num));
//   return index === -1 ? [] : arr.slice(index);
// };

// v3
// const dropElements = (param: IDropElements): number[] => {
//   const { arr, func } = param;

//   while (!func(arr[0])) {
//     if (arr.length === 0) return [];
//     arr.shift();
//   }

//   return arr;
// };

// v4 - just for fun :)
const dropElements = (param: IDropElements): number[] => {
  const { arr, func } = param;

  let index: number = 0;
  let result: number[] = [];
  let start: number = 0;

  while (index < arr.length) {
    if (func(arr[index])) {
      for (let i = index; i < arr.length; i++) {
        result[start] = arr[i];
        start++;
      }
      return result;
    }
    index++;
  }

  return result;
};

console.log(
  'Should be [1, 2, 3] > ',
  dropElements({
    arr: [5, 5, 3],
    func: function (n) {
      return n < 3;
    }
  })
);
