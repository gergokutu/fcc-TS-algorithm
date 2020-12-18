// // Make a function that looks through an array of objects (first argument)
// // Returns an array of all objects that have matching name and value pairs (second argument).
// // Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// V1 Using interface.
// interface IName {
//   collection: ICol[];
//   source: ICol;
// }

// interface ICol {
//   [fieldName: string]: string | number | null;
// }

// const whatIsInAName = (params: IName): object[] => {
//   const { collection, source } = params;
//   const arr: string[] = Object.keys(source);

//   return collection.filter((col: ICol) => {
//     return arr.every(
//       (src: string) => col.hasOwnProperty(src) && source[src] === col[src]
//     );
//   });
// };

// V2 Using Generics
interface IName<T> {
  collection: T[];
  source: object;
}

const whatIsInAName = <T extends object>(params: IName<T>): T[] => {
  const { collection, source } = params;
  const arr: string[] = Object.keys(source);
  return collection.filter((col: T) => {
    return arr.every(
      (src: string) =>
        col.hasOwnProperty(src) &&
        source[src as keyof typeof source] === col[src as keyof typeof col]
    );
  });
};

console.log(
  "Should be [ { first: 'Tybalt', last: 'Capulet' } ] >",
  whatIsInAName({
    collection: [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    source: { last: 'Capulet' }
  })
);

console.log(
  'should be [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }] >',
  whatIsInAName({
    collection: [
      { apple: 1, bat: 2 },
      { bat: 2 },
      { apple: 1, bat: 2, cookie: 2 }
    ],
    source: { bat: 2, apple: 1 }
  })
);
//

console.log(
  'should be [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }] >',
  whatIsInAName({
    collection: [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 }
    ],
    source: { apple: 1, bat: 2 }
  })
);
