var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.id = 32;
    }
    Person.isAdult = function (age) {
        if (age > 17)
            return true;
        return false;
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". I am " + this.age + " years old");
        this.explainJob();
    };
    Person.species = 'Homo sapiens';
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("I am a teacher and I teach " + this.subject);
    };
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            if (!this._subject) {
                throw new Error('There is no subject.');
            }
            return this._subject;
        },
        set: function (value) {
            if (!value) {
                throw new Error('There is no subject.');
            }
            this._subject = value;
        },
        enumerable: true,
        configurable: true
    });
    Teacher.getInstance = function () {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('kaka', 38, 'Math');
        return Teacher.instance;
    };
    return Teacher;
}(Person));
var teacher1 = Teacher.getInstance();
var teacher2 = Teacher.getInstance();
console.log(teacher1, teacher2);
