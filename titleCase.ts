// Return the provided string with the first letter of each word capitalized.
const titleCase = (str: string): string => {
  const words: string[] = str.toLowerCase().split(/\s/);
  const capitalFirst: string[] = words.map((word) => {
    return word.replace(/^\w/, (match) => match.toUpperCase());
  });
  return capitalFirst.join(' ');
};

console.log(
  "Should be I'm A Little Tea Pot >",
  titleCase("I'm a little tEa pot")
);
