//CONST & LET
let name = "John";
let test;

name = "Jack";

//console.log(name);

const person = {
  name: "John",
  age: 33
};

person.name = "Jack";
//console.log(person);

const nums = [1, 2, 3, 4];
nums.push(5);

//console.log(nums);

// ARROW FUNCTIONS
//function sayHello() {
//  console.log("Hello");
//}
const sayHello = name => {
  console.log(`Hello ${name}`);
};

//sayHello("Brad");

const fruits = ["Apples", "Oranges", "Grapes"];
//FOREACH
//fruits.forEach((fruit, index) => console.log(fruit));

//MAP
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
//console.log(singleFruit);

//FILTER
const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Sharon" }
];

const people2 = people.filter(person => person.id !== 2);
//console.log(people2);

//SPREAD
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
//console.log(arr2);
const arr3 = [...arr.filter(num => num !== 2)];
//console.log(arr3);

const personb = {
  name: "Brad",
  age: 36
};

const newPersonb = {
  ...personb,
  email: "brad@gmail.com"
};

//console.log(newPersonb);

//DESTRUCTURING
const profile = {
  fullname: "John Doe",
  address: {
    street: "40 Main st",
    city: "Boston"
  },
  hobbies: ["moves", "music"]
};

const { fullname, address } = profile;

//console.log(fullname, address);

//CLASSES
class Personc {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Personc("John", 31);

//console.log(person1.greet());

//SUBCLASSES
class Customer extends Personc {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}`;
  }
}

const costumer1 = new Customer("Kevin", 32, 300);

//console.log(costumer1.info());

//MODULES
//file 1
//export const name = 'Jeff';

//file 2
//import {name} from './file1';
//console.log(name);
