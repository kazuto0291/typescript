let hasValue= true;
let count = 10;
let float =3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello: string;
hello = 'hello';

const person = {
  name: {
    first: 'jack',
    last: 'smith'
  },
  age: 21
}

const fruits = ['apple', 'banana', 'grape']

const fruit = fruits[0];

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  SHORT= 'SHORT',
  TALL= 'TALLL',
  GRANDE= 'GRANDE',
  VENTI= 'VENTI'
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fjiafjaj = 'fjaeife';
let banana = 'banana';
banana = anything;

let unionType: number | string = 10;

let unionType: (numver | string) [] = [21, 'hello']