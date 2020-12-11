// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
const bouncer = (arr: any[]): any[] => {
  return arr.filter(item => item);
};

console.log('Should be [7, ate, 9] >', bouncer([7, 'ate', '', false, 9]));
