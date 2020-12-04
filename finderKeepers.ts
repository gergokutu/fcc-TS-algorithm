// Create a function that looks through an array arr
// and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.
interface IParams2 {
	arr: number[];
	func: (num: number) => boolean;
}

const findElement = (params: IParams2): number | undefined => {
	const { arr, func } = params;
	return arr.find(func);
};

console.log(
	'Should be 2 >',
	findElement({ arr: [1, 2, 3, 4], func: num => num % 2 === 0 })
);
