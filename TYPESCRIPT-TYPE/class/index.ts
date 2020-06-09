class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}`)
  }
}

let person2: Person;

const quill = new Person('Quill');
console.log(quill);

quill.greeting();

const anotherQuill = {
  name: 'anotherQuill',
  greeting() {},
  anotehrGreeting: quill.greeting
}

anotherQuill.anotehrGreeting();