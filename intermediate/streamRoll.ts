// Flatten a nested array. You must account for varying levels of nesting.

const steamrollArray = <T>(arr: T[]): T[] => {
  const emptyArr: T[] = [];
  const newArr: T[] = emptyArr.concat(...arr);
  return newArr.some(Array.isArray) ? steamrollArray(newArr) : newArr;
};

console.log('Should be [1, 2, 3, 4] >', steamrollArray([1, [2], [3, [[4]]]]));
