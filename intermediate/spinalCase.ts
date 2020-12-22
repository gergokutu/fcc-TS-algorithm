// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.
const spinalCase = (str: string): string => {
  return str
    .trim()
    .replace(/_|\s+|(?<=[A-Za-z0-9])(?=[A-Z])/g, '-')
    .toLowerCase();
};

console.log(
  'Should be this-is-spinal-tap >',
  spinalCase(' The_Andy_Griffith_Show ')
);
