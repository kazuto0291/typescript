var Person = /** @class */ (function () {
    function Person(name, initAge) {
        this.name = name;
        this.age = initAge;
    }
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". I am " + this.age + " years old");
    };
    return Person;
}());
var person2;
var quill = new Person('Quill', 38);
quill.greeting();
quill.incrementAge();
