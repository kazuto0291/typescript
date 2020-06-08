class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: {name: string}) {
    console.log(`Hello! My name is ${this.name}`)
  }
}

const quill = new Person('Quill');
console.log(quill);

quill.greeting();

const anotherQuill = {
  name: 'anotherQuill',
  anotehrGreeting: quill.greeting
}

anotherQuill.anotehrGreeting();