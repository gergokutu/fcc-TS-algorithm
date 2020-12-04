// The algorithm to convert from Celsius to Fahrenheit
// F = Celsius times 9/5, plus 32.
const convertToF = (celsius: number): number => {
	return (celsius * 9) / 5 + 32;
};

console.log('Should be 86 >', convertToF(30));
