// boolean型,number型,string型
// let hasValue: boolean =true;
// let count: number = 10;
// let float: number = 3.14;
// let negative: number = -0.12;
// let single: string = 'hello';
// let double: string = "hello";
// let back: string = `hello`;

// 型推論  基本癖に使う,型推論が出来ないときに方注釈を使う
// let hasValue =true;
// let count = 10;
// let float = 3.14;
// let negative = -0.12;
// let single = 'hello';
// let double = "hello";
// let back = `hello`;

// オブジェクトに型をつける
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: {
//     first: 'Jack',
//     last: 'Smith'
//   },
//   age: 21
// }
// console.log(person.age)


// 配列にかたをつけるarray型
// const fruits: string[] = ['Apple', 'Banana', 'Grape']
// const fruit = fruits[0];

// Tuple型使用して、決まった内容の配列を作る(tuple型は型推論をしない)
// const book: [string, number, boolean] = ['business', 1500, false];
// book[1] = ture;


// Enumを使って、特定のまとまったグループのみを受け入れる列挙型を使う方法
// Enumをしてするときは全部大文字が主流、先頭の変数名も大文字が一般的
// const CoffeeSize = {
//   SHORT: 'SHORT',
//   TALL: 'TALL',
//   GRANDE: 'GRANDE',
//   VENTI: 'VENTI'
// }
//sizeの型がstringなので他の文字列も入れられる
// 今sizeには特定の４種類しか入れたくないからenumをつかう
// enum CoffeeSize  {
//   SHORT = 'SHORT',
//   TALL = 'TALL',
//   GRANDE = 'GRANDE',
//   VENTI = 'VENTI'
// }
//＝を省略できる
// enum CoffeeSize  {
//   SHORT,
//   TALL,
//   GRANDE,
//   VENTI
// }
// const coffee = {
//   hot: true,
//   size: CoffeeSize.TALL
// }

// coffee.size =CoffeeSize.SHORT;

//どんな方も入るany型
//とてもカオスなので使わないようにする
// JS→TSに以降の時有り
// let anything: any = true;
// anything = 'hello';
// anything  = ['hello', 33, true];
// anything = {};
// anything.fjiafja = 'faifai';

// Union型を使って複数の型を使う方法
//したはnumberもstringも扱えるよの意味
// let unionType:number | string = 10;
// let unionTypes: (number | string)[] = [21, 'hello']

// Literal型を使って複雑な型を変数のように扱う
// リテラル型は特定の決まった値のみを扱う型
// constを使うとリテラル型になる
// const apple: 'apple' = 'apple';
// const mikan: 0 = 0;

// リテラル型とユニオン型を組み合わせるとEnum型に似たのが作れる
// 基本的にはEunm型の方が良いが候補が２〜３個のときは使ってもいい
// type ClothSize = 'small' | 'medium' | 'large'
// let clothSize: ClothSize = 'medium';
// const cloth: {
//   color: string;
//   size: ClothSize
// } = {
//   color: 'white',
//   size: clothSize
// }
// cloth.size = "small"

// 関数に型

// function add(num1: number, num2: number): number {
//   return num1 + num2
// }

// 関数が何も返さないときvoid型を使う
// function sayHello(): void {
  // console.log('Hello!');
// }

// console.log(sayHello());
let tmp: undefined =  null;
let tmpNUll: null  =undefined;

//関数を保持する変数に型をつける

const anotherAdd: (n1: number, n2: number) =>number = add;

const doubleNumber = (num: number): number => num * 2;

const doubleNumber1: (num: number) =>number = num=> num * 2;


// コールバック関数に型をつける
function doubleAndHNdle(num: number, cb: (num:number) => number): void {
  const doubleNum = cb(num * 2);
  // console.log(doubleNum);
}

doubleAndHNdle(21, doubleNum => {
  return doubleNum
});

// unknown型を使ってanyより柔軟で厳しい型を定義する方法
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;//使えない
text = anyInput;
//typeof でその変数がどのような型みて、if文で求める型が帰ってきたときにunknown型が使える
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

// never型。。決して何も返さない型
function error(message: string):never {
  throw new Error(message);
}
console.log(error('this is an error'));