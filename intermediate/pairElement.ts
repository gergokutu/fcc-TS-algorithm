// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

const DnaPairs: myObject = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
};

interface myObject {
  [key: string]: string;
}

//V1
const pairElement = (str: string): string[][] => {
  const arrOfLetters: string[] = str.split('');
  return arrOfLetters.map(letter => [letter, DnaPairs[letter]]);
};

console.log(
  'Should be [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]] >',
  pairElement('ATCGA')
);
