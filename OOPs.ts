class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Alice", 25);
// console.log(person1.introduce());


class Person1 {
    constructor(public name: string, public age: number) {
        // Initialize properties
    }
}

const john = new Person1('Uday', 20);
// console.log(`Name: ${john.name}, Age: ${john.age}`);



class Person2{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person = new Person2('Rahul', 22);
console.log(person.name); // Accessing attribute
person.greet();           // Accessing function