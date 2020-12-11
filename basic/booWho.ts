// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

const booWho = (bool: any): boolean => {
  return typeof bool !== 'boolean' ? false : true;
};

console.log('Should be > false', booWho(5));
