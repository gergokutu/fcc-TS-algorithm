type myArr = (number | string)[];

interface IDiffParams {
  arr1: myArr;
  arr2: myArr;
}

const diffArray = (params: IDiffParams): myArr => {
  const { arr1, arr2 } = params;
  const mixedArr: myArr = [...new Set(arr2.concat(arr1))];
  return mixedArr.filter(num => !arr1.includes(num) || !arr2.includes(num));
};

console.log(
  'Should be [4] >',
  diffArray({ arr1: [1, 2, 3, 5], arr2: [1, 2, 3, 4, 5] })
);
