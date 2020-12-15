// Make a function that looks through an array of objects (first argument)
// Returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.


interface IName {
  collection: ICol[];
  source: ICol;
}

interface ICol {
  [fieldName: string]: string | number | null;
}

const whatIsInAName = (params: IName): object[] => {
  const { collection, source } = params;
  const arr: string[] = Object.keys(source);

  return collection.filter((col: ICol) => {
    return arr.every(
      (src: string) => col.hasOwnProperty(src) && source[src] === col[src]
    );
  });
};

console.log(
  "Should be [ { first: 'Romeo', last: 'Montague' } ] >",
  whatIsInAName({
    collection: [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    source: { last: 'Capulet' }
  })
);
