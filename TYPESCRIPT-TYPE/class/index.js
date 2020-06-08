var Person = /** @class */ (function () {
    function Person(initName) {
        this.name = initName;
    }
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name);
    };
    return Person;
}());
var quill = new Person('Quill');
console.log(quill);
quill.greeting();
var anotherQuill = {
    name: 'anotherQuill',
    anotehrGreeting: quill.greeting
};
anotherQuill.anotehrGreeting();
