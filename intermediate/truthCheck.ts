// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

interface ITruthCheck<T> {
  collection: { [key: string]: T }[];
  pre: string;
}

const truthCheck = <T>(params: ITruthCheck<T>): boolean => {
  const { collection, pre } = params;
  return collection.every(col => col[pre]);
};

console.log(
  'Should be true >',
  truthCheck({
    collection: [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    pre: 'sex'
  })
);
