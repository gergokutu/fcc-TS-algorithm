// Return the factorial of the provided integer.
const factorialize = (num: number): number => {
	return num < 1 ? 1 : num * factorialize(num - 1);
};

console.log('Should be 120 >', factorialize(5));
