// boolean型,number型,string型
// let hasValue: boolean =true;
// let count: number = 10;
// let float: number = 3.14;
// let negative: number = -0.12;
// let single: string = 'hello';
// let double: string = "hello";
// let back: string = `hello`;

// 型推論  基本癖に使う,型推論が出来ないときに方注釈を使う
let hasValue =true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;

// オブジェクトに型をつける
const person: {
  name: string;
  age: number;
} = {
  name: {
    first: 'Jack',
    last: 'Smith'
  },
  age: 21
}
console.log(person.age)


// 配列にかたをつけるarray型
const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0];

// Tuple型使用して、決まった内容の配列を作る(tuple型は型推論をしない)
const book: [string, number, boolean] = ['business', 1500, false];
// book[1] = ture;


