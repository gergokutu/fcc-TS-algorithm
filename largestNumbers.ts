// Return an array consisting of the largest number
// from each provided sub-array.
// arr: number[][] same as Array<number[]>

// Ver1
const largestOfFour = (arr: number[][]): number[] => {
	return arr.map(numbers => Math.max(...numbers));
};

// Ver2
// const largestOfFour = (arr: number[][]): number[] => {
// 	const result: number[] = [];

// 	for (let i of arr) {
// 		result.push(Math.max(...i));
// 	}

// 	return result;
// };

// Ver3
// const largestOfFour = (arr: number[][]): number[] => {
// 	const result: number[] = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		let largest: number = arr[i][0];

// 		for (let j = 0; j < arr[i].length; j++) {
// 			if (arr[i][j] > largest) largest = arr[i][j];
// 		}

// 		result[i] = largest;
// 	}

// 	return result;
// };

console.log(
	'Should be [5, 27, 39, 1001] >',
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	])
);
