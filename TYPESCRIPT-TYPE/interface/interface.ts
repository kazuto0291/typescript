interface Human  {
  name: string;
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
    console.log('hello')
  }
}