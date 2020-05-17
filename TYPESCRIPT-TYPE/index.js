// boolean型,number型,string型
// let hasValue: boolean =true;
// let count: number = 10;
// let float: number = 3.14;
// let negative: number = -0.12;
// let single: string = 'hello';
// let double: string = "hello";
// let back: string = `hello`;
// 型推論  基本癖に使う,型推論が出来ないときに方注釈を使う
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
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
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0];
// Tuple型使用して、決まった内容の配列を作る(tuple型は型推論をしない)
var book = ['business', 1500, false];
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
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
//どんな方も入るany型
//とてもカオスなので使わないようにする
// JS→TSに以降の時有り
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fjiafja = 'faifai';
// Union型を使って複数の型を使う方法
//したはnumberもstringも扱えるよの意味
var unionType = 10;
var unionTypes = [21, 'hello'];
// Literal型を使って複雑な型を変数のように扱う
// リテラル型は特定の決まった値のみを扱う型
// constを使うとリテラル型になる
var apple = 'apple';
var mikan = 0;
var clothSize = 'medium';
var cloth = {
    color: 'white',
    size: clothSize
};
cloth.size = "small";
// 関数に型
function add(num1, num2) {
    return num1 + num2;
}

