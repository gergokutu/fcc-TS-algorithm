class Person {
  firstAndLast: string;

  constructor(firstAndLast: string) {
    this.firstAndLast = firstAndLast;
  }

  getFullName() {
    console.log(this.firstAndLast);
  }
}

interface IPerson2 {
  firstAndLast: string;
  getFullName: () => void;
}

var Person2 = function (this: IPerson2, firstAndLast: string) {
  let fullName: string = firstAndLast;
  this.getFullName = function () {
    console.log(fullName);
  };
};

var bob: IPerson2 = new (Person2 as any)('Bob Ross');
bob.getFullName();
