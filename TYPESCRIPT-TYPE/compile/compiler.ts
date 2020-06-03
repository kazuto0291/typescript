console.log('compile');
console.log('Hello');

let hi ='he';
console.log(hi.toUpperCase())


let globalHello = 'hello';
function echo(message:string): string | undefined {
  if (message) {
    return message;
  };
}

let impliciAny;
impliciAny = 'implicitAny';

let nullableMessage: string | undefined = echo('hi');
let undefindableMessage: string | undefined = undefined;
let onlyNUll: null = null;
let onlyUNdefined: undefined =undefined

if (nullableMessage) {
  nullableMessage.toUpperCase();
}

const newFunction = echo.call(null, "hi")