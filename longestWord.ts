// Return the length of the longest word in the provided sentence.
// Your response should be a number.
const findLongestWordLength = (str: string): number => {
	const arrOfWords: RegExpMatchArray = str.match(/\w+/g);
	const resArr: number[] = arrOfWords.map(word => word.length);
	return Math.max(...resArr);
};

console.log(
	'Should return 6 >',
	findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
