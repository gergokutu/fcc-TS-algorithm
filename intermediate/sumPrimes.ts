const sumPrimes = (num: number): number => {
  const isPrime = (number: number) => {
    if (number % 2 === 0 && number !== 2) return false;

    for (let i = 3, s = Math.floor(Math.sqrt(number)); i <= s; i += 2) {
      if (number % i === 0) return false;
    }

    return number > 1;
  };

  let sum = 0;

  for (let i = 0; i < num + 1; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
};

console.log('Should be 17 > ', sumPrimes(10));
