"use strict";
console.log('compile');
console.log('Hello');
var hi = 'he';
console.log(hi.toUpperCase());
function echo(message) {
    var hello = 'hello';
    return message;
}
var impliciAny;
impliciAny = 'implicitAny';
var nullableMessage = echo('hi');
var undefindableMessage = undefined;
var onlyNUll = null;
var onlyUNdefined = undefined;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
var newFunction = echo.call(null, "hi");
