// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
// You have to use the arguments object.

// v1
// const destroyer = (...args: any[]): number[] => {
//   const arr: number[] = args[0];
//   const remain: number[] = args.slice(1);
//   return arr.filter(item => !remain.includes(item));
// };

// v2
const destroyer = (...args: any[]): number[] => {
  return args[0].filter((item: number) => !args.slice(1).includes(item));
};

// v3
// Incase you want to loop
// const destroyer = (...args: any[]): number[] => {
//   const arr: number[] = args[0];
//   const remaining: number[] = args.slice(1);
//   const result: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     !remaining.includes(arr[i]) && result.push(arr[i]);
//   }
//   return result;
// }
// console.log('Should be [ 1, 5, 1 ] >', destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
