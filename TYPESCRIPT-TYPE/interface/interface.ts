interface Nameable {
  name: string;
}
interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

const human: Human = {
  name: 'Quill',
  age: 38,
  greeting(message: string) {
    console.log(message)
  }
}

let tmpFunc: (message: string) => void;

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string) {
    console.log(message);
  }
}

const tmpDeveloper = {
  name: 'Quill',
  age:38,
  experience: 3,
  greeting(message: string):void {
    console.log(message);
  }
}

const user: Human = new Developer('Qill',38 ,3);
const user7: Human = tmpDeveloper;
user.age = 22;
