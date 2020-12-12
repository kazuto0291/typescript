// type addFunc = (num1: number,num: number) => number;

interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number ,n2: number) => {
  return n1 + n2;
};

interface Nameable {
  name: string;
  nickName?: string;
}

const nameable : Nameable = {
  name: 'quill',
  nickName: "quill"
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

let tmpFunc: (messageddddd: string) => void;

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
