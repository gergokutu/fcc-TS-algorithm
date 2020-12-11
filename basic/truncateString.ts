// Truncate a string (first argument) if it is longer than the given maximum string length
//  (second argument). Return the truncated string with a ... ending.
interface IParams {
  str: string;
  num: number;
}

const truncateString = ({ str, num }: IParams): string => {
  const res: string = str.slice(0, num);
  return str.length > num ? res + '...' : str;
};

console.log(
  'Should be A-tisket... >',
  truncateString({ str: 'A-tisket a-tasket A green and yellow basket', num: 8 })
);
