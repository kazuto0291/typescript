console.log('compile');
console.log('Hello');

let hi ='he';
console.log(hi.toUpperCase())

function echo(message:string): string | null {
  return message;
}

let impliciAny;
impliciAny = 'implicitAny';

let nullableMessage: string | null = echo('hi');
let undefindableMessage: string | undefined = undefined;
let onlyNUll: null = null;
let onlyUNdefined: undefined =undefined

if (nullableMessage) {
  nullableMessage.toUpperCase();
}

const newFunction = echo.call(null, "hi")